import { sections } from "@/config/scoring";
import { AnswerMap } from "@/types/assessment";

export type Recommendation = {
  questionId: string;
  sectionTitle: string;
  text: string;
  impact: 1 | 2 | 3;
  resourceLink?: string;
};

export function getRecommendations(answers: AnswerMap): Recommendation[] {
  const recs: Recommendation[] = [];

  for (const section of sections) {
    for (const q of section.questions) {
      const answer = answers[q.id];

      if (answer === undefined || answer <= 2) {
        recs.push({
          questionId: q.id,
          sectionTitle: section.title,
          text: q.recommendation,
          impact: q.impact
        });
      }
    }
  }

  // Sort descending by impact (3 → 2 → 1), then return top 5
  recs.sort((a, b) => b.impact - a.impact);
  return recs.slice(0, 5);
}