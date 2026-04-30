import { sections } from "@/config/scoring";
import { calculateScore } from "@/lib/calculateScore";
import RadialGauge from "@/components/results/radial-gauge/radial-gauge";
import styles from "./section-grid.module.css";



interface Props {
  result: ReturnType<typeof calculateScore>;
}

export default function SectionGrid({ result }: Props) {
  return (
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
  );
}
