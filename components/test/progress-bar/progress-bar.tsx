import styles from "./progress-bar.module.css";

interface Props {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: Props) {
  return (
    <div className={styles.progressTrack}>
      <div
        className={styles.progressFill}
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  );
}