import Link from "next/link";
import styles from "./homepage.module.css";
import { sections } from "@/config/scoring";
import ScaleDemo from "@/components/scale-demo";

const levels = [
  { level: 1, label: "Initial", desc: "No formal tech practices in place." },
  { level: 2, label: "Developing", desc: "Some practices exist but are inconsistent." },
  { level: 3, label: "Defined", desc: "Practices are documented and followed." },
  { level: 4, label: "Advanced", desc: "Practices are measured and optimised." },
  { level: 5, label: "Optimised", desc: "Continuous improvement is embedded." },
];

export default function Home() {
  return (
    <main className={styles.body}>
      <h1 className={styles.title}>Technology Readiness Assessment</h1>
      <p className={styles.subtitle}>Before you begin, here is how the test works.</p>

      <div className={styles.card}>
        <p className={styles.cardLabel}>Sections</p>
        <p className={styles.cardText}>
          The test is divided into <strong>{sections.length} sections</strong>:
        </p>
        <div className={styles.sectionList}>
          {sections.map((s, i) => (
            <div key={s.id} className={styles.sectionItem}>
              <span className={styles.sectionIndex}>{i + 1}</span>
              <div>
                <p className={styles.sectionTitle}>{s.title}</p>
                <p className={styles.sectionCount}>{s.questions.length} questions</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.card}>
        <p className={styles.cardLabel}>How to answer</p>
        <p className={styles.cardText}>
          Each statement has 5 circles. Select the one that best reflects your situation.
        </p>
        <ScaleDemo />
      </div>  

      <div className={styles.card}>
        <p className={styles.cardLabel}>Result</p>
        <p className={styles.cardText}>
          After completing all sections you will receive a TR Level from 1 to 5.
        </p>
        <div className={styles.levelList}>
          {levels.map(({ level, label, desc }) => (
            <div key={level} className={styles.levelItem}>
              <span className={styles.levelBadge}>{level}</span>
              <div>
                <p className={styles.levelLabel}>{label}</p>
                <p className={styles.levelDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link href="/test" className={styles.startButton}>
        Start Assessment
      </Link>
    </main>
  );
}