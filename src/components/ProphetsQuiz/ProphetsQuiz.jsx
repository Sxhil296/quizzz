import React, { useState } from "react";
import QuizCard from "../QuizCard/QuizCard";
import quizData from "../../data/prophets-quiz-data.json";

const ProphetsQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setSelectedOption(isCorrect);
  };

  const handleNextClick = () => {
    setSelectedOption(null);
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousClick = () => {
    setSelectedOption(null);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div>
      <QuizCard
        quizName={"Prophets Quiz"}
        question={quizData[currentQuestion].question}
        options={quizData[currentQuestion].options}
        selectedOption={selectedOption}
        handleOptionClick={handleOptionClick}
        handleNextClick={handleNextClick}
        handlePreviousClick={handlePreviousClick}
        currentQuestion={currentQuestion}
      />
    </div>
  );
};

export default ProphetsQuiz;
