import React from "react";
import { Question } from "../../../utils/types/common.type";

type PropsType = {
  question: Question;
  isChecked: (questionId: string, choice: string) => boolean;
  handleAnswerChange: (
    questionId: string,
    choice: string | string[]
  ) => unknown;
  handleCheckboxChange: (
    questionId: string,
    choice: string[] | string
  ) => unknown;
};

export const AnswerOptions: React.FC<PropsType> = ({
  question,
  isChecked,
  handleAnswerChange,
  handleCheckboxChange,
}) => {
  if (!question) {
    return (
      <div>
        No questions available, <br /> you may try agian by reducing your
        requested number of questions on this topic
      </div>
    );
  }

  const { id, questionType, choices } = question;

  if (questionType === "single") {
    return (
      <div>
        {choices.sort().map((choice) => (
          <div key={choice} className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              id={choice}
              name={question.id}
              value={choice}
              checked={isChecked(question.id || "", choice)}
              onChange={() => handleAnswerChange(id || "", choice)}
            />
            <label htmlFor={choice} className="form-check-label ms-2">
              {choice}
            </label>
          </div>
        ))}
      </div>
    );
  } else if (questionType === "multiple") {
    return (
      <div>
        {choices.sort().map((choice) => (
          <div key={choice} className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id={choice}
              name={question.id}
              value={choice}
              checked={isChecked(question.id || "", choice)}
              onChange={() => handleCheckboxChange(id || "", choice)}
            />
            <label htmlFor={choice} className="form-check-label ms-2">
              {choice}
            </label>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};
