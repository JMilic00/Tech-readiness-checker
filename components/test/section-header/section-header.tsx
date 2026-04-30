import styles from "./section-header.module.css";

interface Props {
  current: number;
  total: number;
  title: string;
}

export default function SectionHeader({ current, total, title }: Props) {
  return (
    <div className={styles.sectionHeader}>
      <p className={styles.sectionCounter}>{current} / {total}</p>
      <h2 className={styles.sectionTitle}>{title}</h2>
    </div>
  );
}