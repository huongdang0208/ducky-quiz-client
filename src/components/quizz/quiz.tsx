import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchQuizForUser } from "../../../utils/services/questions.service";
import { AnswerOptions } from "../question/answer-options";
import { Answer, Question } from "../../../utils/types/common.type";

const Quiz: React.FC = () => {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [, setTotalScores] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedSubject, selectedNumQuestions } = location.state;

  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = async () => {
    if (selectedNumQuestions && selectedSubject) {
      const questions = await fetchQuizForUser(
        selectedNumQuestions,
        selectedSubject
      );
      setQuizQuestions(questions);
    }
  };

  const handleAnswerChange = (
    questionId: string,
    answer: string | string[]
  ) => {
    setSelectedAnswers((prevAnswers) => {
      const existingAnswerIndex = prevAnswers.findIndex(
        (answerObj) => answerObj.id === questionId
      );
      const selectedAnswer: string[] | string = Array.isArray(answer)
        ? answer.map((a) => a.charAt(0))
        : answer.charAt(0);

      if (existingAnswerIndex !== -1) {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex] = {
          id: questionId,
          answer: selectedAnswer,
        };
        console.log(updatedAnswers);
        return updatedAnswers;
      } else {
        const newAnswer = { id: questionId, answer: selectedAnswer };

        return [...prevAnswers, newAnswer];
      }
    });
  };

  const isChecked = (questionId: string, choice: string) => {
    const selectedAnswer = selectedAnswers.find(
      (answer) => answer.id === questionId
    );
    if (!selectedAnswer) {
      return false;
    }
    if (Array.isArray(selectedAnswer.answer)) {
      return selectedAnswer.answer.includes(choice.charAt(0));
    }
    return selectedAnswer.answer === choice?.charAt(0);
  };

  const handleCheckboxChange = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _questionId: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _choice: string | string[]
  ) => {
  };

  const handleSubmit = () => {
    const scores = 0;
    quizQuestions.forEach((question) => {
      const selectedAnswer = selectedAnswers.find(
        (answer) => answer.id === question.id
      );
      if (selectedAnswer) {
        // const selectedOptions = Array.isArray(selectedAnswer.answer)
        //   ? selectedAnswer.answer.map((option) => option.charAt(0))
        //   : [selectedAnswer.answer.charAt(0)];
        // const correctOptions = Array.isArray(question.correctAnswer)
        //   ? question.correctAnswer?.map((option) => option.charAt(0))
        //   : [question.correctAnswer?.charAt(0)];
        // const isCorrect =
        //   selectedOptions.length === correctOptions.length &&
        //   selectedOptions.every((option) => correctOptions.includes(option));
        // if (isCorrect) {
        //   scores++;
        // }
      }
    });
    setTotalScores(scores);
    setSelectedAnswers([]);
    setCurrentQuestionIndex(0);
    navigate("/quiz-result", { state: { quizQuestions, totalScores: scores } });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      console.log(selectedAnswers);
    } else {
      handleSubmit();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="p-5">
      <h3 className="text-info">
        Question {quizQuestions.length > 0 ? currentQuestionIndex + 1 : 0} of{" "}
        {quizQuestions.length}
      </h3>

      <h4 className="mb-4">
        <pre>{quizQuestions[currentQuestionIndex]?.question}</pre>
      </h4>

      <AnswerOptions
        question={quizQuestions[currentQuestionIndex]}
        isChecked={isChecked}
        handleAnswerChange={handleAnswerChange}
        handleCheckboxChange={handleCheckboxChange}
      />

      <div className="mt-4">
        <button
          className="btn btn-sm btn-primary me-2"
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous question
        </button>
        <button
          className={`btn btn-sm btn-info ${
            currentQuestionIndex === quizQuestions.length - 1 &&
            "btn btn-sm btn-warning"
          }`}
          onClick={handleNextQuestion}
          disabled={
            !selectedAnswers.find(
              (answer) =>
                answer.id === quizQuestions[currentQuestionIndex]?.id ||
                answer.answer.length > 0
            )
          }
        >
          {currentQuestionIndex === quizQuestions.length - 1
            ? "Submit quiz"
            : "Next question"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
