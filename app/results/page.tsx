"use client";

import { useEffect, useState } from "react";
import { sections } from "@/config/scoring";
import { calculateScore } from "@/lib/calculateScore";
import { AnswerMap } from "@/types/assessment";
import styles from "./results.module.css";

export default function ResultsPage() {
  const [result, setResult] = useState<ReturnType<typeof calculateScore> | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("assessment_answers");
    if (raw) {
      const answers: AnswerMap = JSON.parse(raw);
      setResult(calculateScore(answers));
    }
  }, []);

  if (!result) {
    return (
      <main className={styles.body}>
        <p className={styles.empty}>No results found. Complete the assessment first.</p>
      </main>
    );
  }

  const levelLabels: Record<number, string> = {
    1: "Initial",
    2: "Developing",
    3: "Defined",
    4: "Advanced",
    5: "Optimised",
  };

  return (
    <main className={styles.body}>
      {/* Overall score */}
      <div className={styles.overallCard}>
        <p className={styles.overallLabel}>Overall TR Level</p>
        <div className={styles.overallScoreRow}>
          <span className={styles.overallScore}>{result.totalScore}%</span>
          <span className={styles.overallLevel}>Level {result.level} — {levelLabels[result.level]}</span>
        </div>
        <div className={styles.barTrack}>
          <div
            className={styles.barFill}
            style={{ width: `${result.totalScore}%` }}
          />
        </div>
        <div className={styles.barTickRow}>
          {[0, 20, 40, 60, 80, 100].map((t) => (
            <span key={t} className={styles.barTick}>{t}%</span>
          ))}
        </div>
      </div>

      {/* Section scores */}
      <div className={styles.sectionGrid}>
        {sections.map((section) => {
          const pct = result.sectionScores[section.id] ?? 0;
          return (
            <div key={section.id} className={styles.sectionCard}>
              <p className={styles.sectionTitle}>{section.title}</p>
              <div className={styles.radialWrapper}>
                <RadialGauge value={pct} />
              </div>
              <p className={styles.sectionPct}>{pct}%</p>
              <div className={styles.sectionBarTrack}>
                <div className={styles.sectionBarFill} style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

function RadialGauge({ value }: { value: number }) {
  const r = 42;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;

  return (
    <svg viewBox="0 0 100 100" className={styles.radialSvg}>
      {/* track */}
      <circle
        cx="50" cy="50" r={r}
        fill="none"
        stroke="#2A2A2A"
        strokeWidth="8"
      />
      {/* fill */}
      <circle
        cx="50" cy="50" r={r}
        fill="none"
        stroke="#C8A96E"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform="rotate(-90 50 50)"
        style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1)" }}
      />
    </svg>
  );
}
