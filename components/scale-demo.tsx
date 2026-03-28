"use client";

import { useState } from "react";
import styles from "./scale-demo.module.css";

const scaleItems = [
  { value: 0, label: "Strongly disagree" },
  { value: 1, label: "Disagree" },
  { value: 2, label: "Neutral" },
  { value: 3, label: "Agree" },
  { value: 4, label: "Strongly agree" },
];

export default function ScaleDemo() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className={styles.scaleDemo}>
      {scaleItems.map((item) => (
        <div key={item.value} className={styles.scaleDemoItem}>
          <button
            className={`${styles.dot} ${selected === item.value ? styles.selected : ""}`}
            onClick={() => setSelected(item.value)}
          />
          <span className={styles.scaleDemoLabel}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}