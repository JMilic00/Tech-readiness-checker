import styles from "./homepage.module.css";
import { sections } from "@/config/scoring";
import ScaleDemo from "@/components/homepage/scale-demo/scale-demo";
import StartButton from "@/components/homepage/start-button/start-button";

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

      <div className={styles.card}>
        <p className={styles.cardLabel}>What you will get</p>
        <p className={styles.cardText}>
          After completing the assessment, your results page will include:
        </p>
        <div className={styles.levelList}>
          <div className={styles.levelItem}>
            <span className={styles.levelBadge}>1</span>
            <div>
              <p className={styles.levelLabel}>Overall TR Level</p>
              <p className={styles.levelDesc}>Your total score and maturity level across all sections.</p>
            </div>
          </div>
          <div className={styles.levelItem}>
            <span className={styles.levelBadge}>2</span>
            <div>
              <p className={styles.levelLabel}>Section breakdown</p>
              <p className={styles.levelDesc}>Individual score for each of the {sections.length} sections.</p>
            </div>
          </div>
          <div className={styles.levelItem}>
            <span className={styles.levelBadge}>3</span>
            <div>
              <p className={styles.levelLabel}>Recommendations</p>
              <p className={styles.levelDesc}>Specific actions for every question you scored low on, ranked by impact.</p>
            </div>
          </div>
        </div>
      </div>

      <StartButton />
    </main>
  );
}