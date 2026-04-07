"use client";

import { useState, useEffect } from "react";
import { sections } from "@/config/scoring";
import QuestionCard from "@/components/question-card";
import { AnswerMap, AnswerValue } from "@/types/assessment";
import { useRouter } from "next/navigation";
import styles from "./test.module.css";

const STORAGE_KEY = "assessment_answers";

export default function Page() {
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setAnswers(JSON.parse(raw));
  }, []);

  const handleChange = (questionId: string, value: AnswerValue) => {
    setAnswers((prev) => {
      const next = { ...prev, [questionId]: value };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const section = sections[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === sections.length - 1;

  return (
    <main className={styles.bodyContent}>

      <div className={styles.sectionHeader}>
        <p className={styles.sectionCounter}>{currentIndex + 1} / {sections.length}</p>
        <h2 className={styles.sectionTitle}>{section.title}</h2>
      </div>

      <div className={styles.progressTrack}>
      <div
        className={styles.progressFill}
        style={{ width: `${((currentIndex + 1) / sections.length) * 100}%` }}
      />
      </div>

      <div className={styles.content}>
        {section.questions.map((q, index) => (
          <QuestionCard
            key={q.id}
            question={q}
            index={index}
            value={answers[q.id]}
            onChange={(value) => handleChange(q.id, value)}
          />
        ))}
      </div>

      <div className={styles.navigation}>
        <button
          className={styles.navButton}
          onClick={() => setCurrentIndex((i) => i - 1)}
          disabled={isFirst}
        >
          Back
        </button>

        <button
          className={`${styles.navButton} ${styles.navButtonPrimary}`}
          onClick={isLast ? () => router.push("/results") : () => setCurrentIndex((i) => i + 1)}
        >
          {isLast ? "Submit" : "Next"}
        </button>
      </div>

    </main>
  );
}