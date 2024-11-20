import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

interface Question {
  questionId: string;
  questionText: string;
  options: string[];
  difficulty: string;
}

interface QuizDetails {
  title: string;
  description: string;
  questions: Question[];
}

const QuizStart = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quizDetails, setQuizDetails] = useState<QuizDetails | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(45);
  const [answers, setAnswers] = useState<
    Array<{ questionId: string; selectedAnswer: string }>
  >([]);
  const [results, setResults] = useState<any>(null);
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(id)
    {
    if(token)
    {
      setToken(token);
    axios
    .post(`http://localhost:5000/api/quizzes/start`, {
      "quizId": `${id}`,
    }, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    })
      .then((res) => setQuizDetails(res.data))
      .catch((err) => console.error(err));
    }
    }}, [id]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion(); 
    } else if (!results) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, results]);

  const handleAnswer = (selectedOption: string) => {
    setSelectedAnswer(selectedOption);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer && quizDetails) {
      const currentQuestion = quizDetails.questions[currentQuestionIndex];
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { questionId: currentQuestion.questionId, selectedAnswer },
      ]);
    }

    if (
      quizDetails &&
      currentQuestionIndex < quizDetails.questions.length - 1
    ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(45);
      setSelectedAnswer(null);
    } else {
      submitQuiz(); 
    }
  };

  const submitQuiz = () => {

    const payload = {
      quizId: id,
      answers,
    };
    console.log("Final", payload)
    axios
    .post(
      `http://localhost:5000/api/quizzes/${id}/submit`,
      payload, 
      {  
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    )
    .then((res) => setResults(res.data))  
    .catch((err) => console.error(err));  
  }
  if (!quizDetails) {
    return <div>Loading quiz details...</div>;
  }

  if (results) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
        <p>Your Score: {results.score}</p>
        <p>Average Score: {results.averageScore}</p>
        <p>Your Rank: {results.rank}</p>
        <h2 className="text-lg font-semibold mt-4">Leaderboard:</h2>
        <ul>
          {results.leaderboard.map((entry: any, index: number) => (
            <li key={index}>Score: {entry.score}</li>
          ))}
        </ul>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-500 text-white p-2 rounded-lg"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const currentQuestion = quizDetails.questions[currentQuestionIndex];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{quizDetails.title}</h1>
      <p>{quizDetails.description}</p>
      <div className="mt-6">
        <p className="text-lg font-medium">
          {currentQuestionIndex + 1}. {currentQuestion.questionText}
        </p>
        <p className="text-sm mb-4">Time Left: {timeLeft} seconds</p>
        <ul className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <li key={index}>
              <button
                onClick={() => handleAnswer(option)}
                className={`w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg ${
                  selectedAnswer === option ? "bg-green-600" : ""
                }`}
                disabled={!!selectedAnswer}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          {selectedAnswer && (
            <button
              onClick={handleNextQuestion}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizStart;
