import styles from "./navigation-buttons.module.css";

interface Props {
  isFirst: boolean;
  isLast: boolean;
  onBack: () => void;
  onNext: () => void;
  onHome: () => void;
}

export default function NavigationButtons({
  isFirst, isLast, onBack, onNext, onHome,
}: Props) {
  return (
    <div className={styles.navigation}>
      <button className={styles.navButton} onClick={isFirst ? onHome : onBack}>
        {isFirst ? "Home" : "Back"}
      </button>
      <button
        className={`${styles.navButton} ${styles.navButtonPrimary}`}
        onClick={onNext}
      >
        {isLast ? "Submit" : "Next"}
      </button>
    </div>
  );
}