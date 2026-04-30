import { sections } from "@/config/scoring";
import { AnswerMap } from "@/types/assessment";

export function calculateScore(answers: AnswerMap) {
  const sectionScores: Record<string, number> = {};
  let totalScore = 0;

  for (const section of sections) {
    const questions = section.questions;

    // prosjek pitanja → 0-100
    const avg = questions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0) / questions.length;
    const pct = Math.round((avg / 4) * 100);

    sectionScores[section.id] = pct;

    // ponderirani doprinos ukupnom (section.weight je 0.10, 0.20 itd.)
    totalScore += pct * section.weight;
  }

  const finalScore = Math.round(totalScore);

  let level = 1;
  if (finalScore >= 85) level = 5;
  else if (finalScore >= 65) level = 4;
  else if (finalScore >= 45) level = 3;
  else if (finalScore >= 25) level = 2;

  return { totalScore: finalScore, level, sectionScores };
} 