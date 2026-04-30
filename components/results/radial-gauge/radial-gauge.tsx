import styles from "./radial-gauge.module.css";

interface Props {
  value: number;
}

export default function RadialGauge({ value }: Props) {
  const r = 42;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;

  return (
    <svg viewBox="0 0 100 100" className={styles.radialSvg}>
      <circle cx="50" cy="50" r={r} fill="none" stroke="#2A2A2A" strokeWidth="8" />
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