"use client";

import { useState, useEffect } from "react";
import { sections } from "@/config/scoring";
import QuestionCard from "@/components/question-card";
import { AnswerMap, AnswerValue } from "@/types/assessment";
import styles from "./test.module.css";
import Link from 'next/link'

const STORAGE_KEY = "assessment_answers";

export default function Page() {
  const [answers, setAnswers] = useState<AnswerMap>({});

  // Učitaj iz localStorage pri mountu
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

  return (
    <main className={styles.bodyContent}>
      {sections.map((section) => (
        <div key={section.id} className={styles.content}>
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
      ))}
      <Link href="/results" className={styles.finishButton}>Finish</Link>
    </main>
  );
}