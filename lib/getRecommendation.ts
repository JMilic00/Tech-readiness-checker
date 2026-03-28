import { sections } from "@/config/scoring";
import { AnswerMap } from "@/types/assessment";

export function getRecommendations(answers: AnswerMap) {
  const recs: string[] = [];

  for (const section of sections) {
    for (const q of section.questions) {
      const answer = answers[q.id];

      if (answer === undefined || answer < 3) {
        recs.push(q.recommendation);
      }
    }
  }

  return recs;
}