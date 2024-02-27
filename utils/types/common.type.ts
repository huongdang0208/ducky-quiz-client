export type Question = {
  id?: string;
  question: string;
  subject?: string;
  questionType?: string;
  choices: string[];
  correctAnswer?: string[];
};

export type Answer = {
  id: string;
  answer: string;
};
