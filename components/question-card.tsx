"use client";

import styles from './question-card.module.css';
import { Question, AnswerValue } from '@/types/assessment';

type Props = {
  question: Question;
  index: number;
  value?: AnswerValue;
  onChange: (value: AnswerValue) => void;
};

export default function QuestionCard({ question, index, value, onChange }: Props) {
  return (
    <div className={styles.questionCard}>
      <p className={styles.questionLabel}>
        Question {index + 1}
      </p>

      <p className={styles.questionText}>
        {question.text}
      </p>

      <div className={styles.scaleRow}>
        {[0, 1, 2, 3, 4].map((v) => (
          <button
            key={v}
            className={`${styles.dot} ${value === v ? styles.selected : ""}`}
            onClick={() => onChange(v as AnswerValue)}
          />
        ))}
      </div>

      <div className={styles.scaleLabels}>
        <span>Strongly disagree</span>
        <span>Strongly agree</span>
      </div>
    </div>
  );
}
