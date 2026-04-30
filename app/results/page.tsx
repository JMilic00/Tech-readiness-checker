"use client";

import { useEffect, useState } from "react";
import { sections } from "@/config/scoring";
import { calculateScore } from "@/lib/calculateScore";
import { AnswerMap } from "@/types/assessment";
import { useRouter } from "next/navigation";
import OverallCard from "@/components/results/overall-card/overall-card";
import SectionGrid from "@/components/results/section-grid/section-grid";
import Recommendations from "@/components/results/recommendations/recommendations";
import styles from "./results.module.css";

export default function ResultsPage() {
  const [result, setResult] = useState<ReturnType<typeof calculateScore> | null>(null);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const router = useRouter();

  useEffect(() => {
    const raw = localStorage.getItem("assessment_answers");
    if (raw) {
      const parsed: AnswerMap = JSON.parse(raw);
      setAnswers(parsed);
      setResult(calculateScore(parsed));
    }
  }, []);

  if (!result) {
    return (
      <main className={styles.body}>
        <p className={styles.empty}>Niti jedan rezultat nije upisan.</p>
        <button className={styles.emptyButton} onClick={() => router.push("/test")}>
          Ponovi test
        </button>
      </main>
    );
  }

  return (
    <main className={styles.body}>
      <OverallCard result={result} />
      <SectionGrid result={result} />
      <Recommendations sections={sections} answers={answers} result={result} />
      <div className={styles.actions}>
        <button
          className={styles.actionButton}
          onClick={() => {
            localStorage.removeItem("assessment_answers");
            router.push("/test");
          }}
        >
          Ponovi test
        </button>
        <button
          className={`${styles.actionButton} ${styles.actionButtonPrimary}`}
          onClick={() => window.print()}
        >
          Print to PDF
        </button>
      </div>
    </main>
  );
}