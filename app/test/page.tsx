"use client";

import { useState, useEffect } from "react";
import { sections } from "@/config/scoring";
import QuestionCard from "@/components/homepage/question-card/question-card";
import SectionHeader from "@/components/test/section-header/section-header";
import ProgressBar from "@/components/test/progress-bar/progress-bar";
import NavigationButtons from "@/components/test/navigation-buttons/navigation-buttons";
import { AnswerMap, AnswerValue } from "@/types/assessment";
import { useRouter } from "next/navigation";
import styles from "./test.module.css";



const STORAGE_KEY = "assessment_answers";
const CURRENT_SECTION_KEY = "assessment_current_section";

export default function Page() {
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedAnswers = localStorage.getItem(STORAGE_KEY);
    const savedIndex = localStorage.getItem(CURRENT_SECTION_KEY);
    if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
    if (savedIndex) {
      const parsed = parseInt(savedIndex, 10);
      if (!isNaN(parsed) && parsed >= 0 && parsed < sections.length)
        setCurrentIndex(parsed);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded)
      localStorage.setItem(CURRENT_SECTION_KEY, currentIndex.toString());
  }, [currentIndex, isLoaded]);

  const handleChange = (questionId: string, value: AnswerValue) => {
    setAnswers((prev) => {
      const next = { ...prev, [questionId]: value };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
    setShowWarning(false);
  };

  const isSectionComplete = () =>
    sections[currentIndex].questions.every((q) => answers[q.id] !== undefined);

  const section = sections[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === sections.length - 1;

  const goNext = () => {
    if (!isSectionComplete()) {
      setShowWarning(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (isLast) {
      localStorage.removeItem(CURRENT_SECTION_KEY);
      router.push("/results");
    } else {
      setCurrentIndex((i) => i + 1);
      setShowWarning(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goBack = () => {
    setShowWarning(false);
    setCurrentIndex((i) => Math.max(0, i - 1));
    window.scrollTo(0, 0);
  };

  const handleHomeClick = () => {
    if (window.confirm(
      "Warning: Going back to the home page will lose all your current progress.\n\nAre you sure you want to continue?"
    )) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(CURRENT_SECTION_KEY);
      router.push("/");
    }
  };

  if (!isLoaded)
    return <div className={styles.loading}>Loading your progress...</div>;

  return (
    <main className={styles.bodyContent}>
      <SectionHeader
        current={currentIndex + 1}
        total={sections.length}
        title={section.title}
      />
      <ProgressBar current={currentIndex + 1} total={sections.length} />
      <NavigationButtons
        isFirst={isFirst}
        isLast={isLast}
        onBack={goBack}
        onNext={goNext}
        onHome={handleHomeClick}
      />
      {showWarning && (
        <p className={styles.warning}>Please answer all questions in this section.</p>
      )}
      <div className={styles.content}>
        {section.questions.map((q, index) => (
          <QuestionCard
            key={q.id}
            question={q}
            index={index}
            value={answers[q.id]}
            onChange={(value) => handleChange(q.id, value)}
          />
        ))}
      </div>
      <NavigationButtons
        isFirst={isFirst}
        isLast={isLast}
        onBack={goBack}
        onNext={goNext}
        onHome={handleHomeClick}
      />
    </main>
  );
}