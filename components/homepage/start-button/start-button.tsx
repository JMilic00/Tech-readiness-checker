"use client";

import { useRouter } from "next/navigation";
import styles from "./start-button.module.css";

export default function StartButton() {
  const router = useRouter();

  const handleStart = () => {
    localStorage.removeItem("assessment_answers");
    router.push("/test");
  };

  return (
    <button className={styles.startButton} onClick={handleStart}>
      Start Assessment
    </button>
  );
}