import { sections } from "@/config/scoring";
import { AnswerMap } from "@/types/assessment";

export function calculateScore(answers: AnswerMap) {
  let totalScore = 0;
  let maxScore = 0;

  const sectionScores: Record<string, number> = {};

  for (const section of sections) {
    let sectionTotal = 0;
    let sectionMax = 0;

    for (const q of section.questions) {
      const answer = answers[q.id] ?? 0;

      // weighted score
      const value = answer * q.weight;

      sectionTotal += value;
      sectionMax += 4 * q.weight;
    }

    const sectionPercent = (sectionTotal / sectionMax) * 100;

    sectionScores[section.id] = Math.round(sectionPercent);

    totalScore += sectionTotal;
    maxScore += sectionMax;
  }

  const finalScore = Math.round((totalScore / maxScore) * 100);

  // TR Level (1–5)
  let level = 1;

  if (finalScore >= 80) level = 5;
  else if (finalScore >= 60) level = 4;
  else if (finalScore >= 40) level = 3;
  else if (finalScore >= 20) level = 2;

  return {
    totalScore: finalScore,
    level,
    sectionScores,
  };
}