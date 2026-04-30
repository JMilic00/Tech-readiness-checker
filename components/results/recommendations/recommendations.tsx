import { calculateScore } from "@/lib/calculateScore";
import { AnswerMap } from "@/types/assessment";
import styles from "./recommendations.module.css";

interface Section {
  id: string;
  title: string;
  questions: { id: string; text: string; recommendation: string; impact: 1 | 2 | 3 }[];
}

interface Props {
  sections: Section[];
  answers: AnswerMap;
  result: ReturnType<typeof calculateScore>;
}

export default function Recommendations({ sections, answers, result }: Props) {
  return (
    <div className={styles.recommendationsWrapper}>
      {sections.map((section) => {
        const weakQuestions = section.questions
          .filter((q) => (answers?.[q.id] ?? 5) <= 2)
          .sort((a, b) => b.impact - a.impact);
        if (weakQuestions.length === 0) return null;

        return (
          <div key={section.id} className={styles.recSection}>
            <div className={styles.recSectionHeader}>
              <p className={styles.recSectionTitle}>{section.title}</p>
              <span className={styles.recSectionScore}>
                {result.sectionScores[section.id]}%
              </span>
            </div>
            <ul className={styles.recList}>
              {weakQuestions.map((q, index) => (
                <li key={q.id} className={styles.recItem}>
                  <span className={styles.recBullet} data-impact={q.impact}>{index + 1}</span>
                  <div className={styles.recContent} data-impact={q.impact}>
                    <div className={styles.recQuestionRow}>
                      <span className={styles.recQuestion}>{q.text}</span>
                      <span className={styles.recImpact} data-impact={q.impact}>
                        Impact: {q.impact}/3
                      </span>
                    </div>
                    <span className={styles.recRecommendation}>{q.recommendation}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}