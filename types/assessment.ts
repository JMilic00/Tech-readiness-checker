export type AnswerValue = 0 | 1 | 2 | 3 | 4;

export type AnswerMap = {
  [questionId: string]: AnswerValue;
};

export type Question = {
  id: string;
  text: string;
  recommendation: string;
};

export type Section = {
  id: string;
  title: string;
  weight: number;
  questions: Question[];
};