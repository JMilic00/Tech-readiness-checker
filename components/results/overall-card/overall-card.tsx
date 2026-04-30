import styles from "./overall-card.module.css";
import { calculateScore } from "@/lib/calculateScore";

const levelLabels: Record<number, string> = {
  1: "Initial",
  2: "Developing",
  3: "Defined",
  4: "Advanced",
  5: "Optimised",
};

interface Props {
  result: ReturnType<typeof calculateScore>;
}

export default function OverallCard({ result }: Props) {
  return (
    <div className={styles.overallCard}>
      <p className={styles.overallLabel}>Overall TR Level</p>
      <div className={styles.overallScoreRow}>
        <span className={styles.overallScore}>{result.totalScore}%</span>
        <span className={styles.overallLevel}>
          Level {result.level} — {levelLabels[result.level]}
        </span>
      </div>
      <div className={styles.barTrack}>
        <div className={styles.barFill} style={{ width: `${result.totalScore}%` }} />
      </div>
      <div className={styles.barTickRow}>
        {[0, 20, 40, 60, 80, 100].map((t) => (
          <span key={t} className={styles.barTick}>{t}%</span>
        ))}
      </div>
    </div>
  );
}