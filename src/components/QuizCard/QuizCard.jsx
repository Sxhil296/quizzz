import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const QuizCard = ({
  quizName,
  question,
  options,
  handleOptionClick,
  handleNextClick,
  handlePreviousClick,
  currentQuestion,
}) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (isCorrect, index) => {
    if (!isAnswered) {
      setIsAnswered(true);
      setSelectedOption(index);
      handleOptionClick(isCorrect);
      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    setIsAnswered(false);
    setSelectedOption(null);
    handleNextClick();
  };

  const handlePrevious = () => {
    setIsAnswered(false);
    setSelectedOption(null);
    handlePreviousClick();
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center text-2xl underline">
            {quizName}
          </CardTitle>
          <CardDescription className="text-left text-[18px] font-medium">
            {currentQuestion + 1}: {question}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="comfortable">
            {options.map((option, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <RadioGroupItem
                  value={index}
                  id={`r${index}`}
                  onClick={() => handleOptionSelect(option.isCorrect, index)}
                  disabled={isAnswered}
                  checked={selectedOption === index}
                  className={`radio-item ${
                    isAnswered && option.isCorrect
                      ? "bg-[#66f332]"
                      : isAnswered && selectedOption === index
                      ? "bg-[#f44336]"
                      : ""
                  }`}
                />
                <Label htmlFor={`r${index}`}>{option.text}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <div>
            Score: {score}/{currentQuestion + 1}
          </div>
          <Button
            onClick={handleNext}
            disabled={currentQuestion === question.length - 1}
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizCard;
