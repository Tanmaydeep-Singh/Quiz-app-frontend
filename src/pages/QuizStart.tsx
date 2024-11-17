import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Question {
  id: string;
  text: string;
  options: string[];
  correctOption: number;
  difficulty: number;
}

const questions: Question[] = [
  { id: "q1", text: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctOption: 1, difficulty: 1 },
  { id: "q2", text: "What is 15 x 15?", options: ["200", "225", "250", "275"], correctOption: 1, difficulty: 2 },
  { id: "q3", text: "What is the square root of 144?", options: ["10", "11", "12", "13"], correctOption: 2, difficulty: 3 },
];

const QuizStart = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [difficultyLevel, setDifficultyLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(45);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<Array<{ questionId: string, selectedOption: number | null, isCorrect: boolean }>>([]);

  useEffect(() => {
    const initialQuestion = questions[questionIndex];
    setCurrentQuestion(initialQuestion);
  }, [questionIndex]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleSkipQuestion();
    } else if (!quizCompleted) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, quizCompleted]);

  const handleAnswer = (selected: number) => {
    setSelectedOption(selected);
    const isCorrect = selected === currentQuestion?.correctOption;
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { questionId: currentQuestion?.id || '', selectedOption: selected, isCorrect }
    ]);
    if (isCorrect) {
      setUserScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setTimeLeft(45);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
      navigate("/results", { state: { userScore, answers } });
    }
  };

  const handleSkipQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setTimeLeft(45);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
      navigate("/results", { state: { userScore, answers } });
    }
  };

  const handleFinishQuiz = () => {
    setQuizCompleted(true);
    navigate("/results", { state: { userScore, answers } });
  };

  return (
    <div className="text-gray-200 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-green-400 mb-4">
          Quiz: {id}
        </h1>
        {currentQuestion ? (
          <div>
            <p className="text-lg font-medium mb-4">{currentQuestion.text}</p>
            <p className="mb-4">Time Left: {timeLeft} sec</p>
            <p className="mb-4">Question {questionIndex + 1} of {questions.length}</p>
            <ul className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleAnswer(index)}
                    className={`w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg ${selectedOption === index ? 'bg-green-600' : ''}`}
                    disabled={selectedOption !== null}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              {selectedOption !== null && (
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg mr-2"
                >
                  Next Question
                </button>
              )}
              <button
                onClick={handleSkipQuestion}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg mr-2"
              >
                Skip Question
              </button>
              <button
                onClick={handleFinishQuiz}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
              >
                Finish Quiz
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p>Quiz Completed!</p>
            <p>Your score: {userScore} out of {questions.length}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizStart;
