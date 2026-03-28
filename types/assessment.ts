export type AnswerValue = 0 | 1 | 2 | 3 | 4;

export type AnswerMap = {
  [questionId: string]: AnswerValue;
};

export type Question = {
  id: string;
  text: string;
  weight: number;
  recommendation: string;
};

export type Section = {
  id: string;
  title: string;
  questions: Question[];
};