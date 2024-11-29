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
  const [answers, setAnswers] = useState<
    Array<{ questionId: string; selectedAnswer: string }>
  >([]);
  const [results, setResults] = useState<any>(null);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (id && token) {
      setToken(token);
      axios
        .post(
          `http://localhost:5000/api/quizzes/start`,
          { quizId: `${id}` },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => setQuizDetails(res.data))
        .catch((err) => console.error(err));
    }
  }, [id]);

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
    axios
      .post(`https://quiz-app-backend-production-f3b5.up.railway.app/api/quizzes/${id}/submit`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setResults(res.data))
      .catch((err) => console.error(err));
  };

  if (!quizDetails) {
    return <div>Loading quiz details...</div>;
  }

  if (results) {
    return (
      <div className="p-6 w-full h-screen max-w-6xl mx-auto text-gray-900">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-purple-600">
          Quiz Results
        </h1>
        <p className="text-2xl font-medium mb-4">Your Score: {results.score}</p>
        <p className="text-xl text-gray-700 mb-2">
          Average Score: {results.averageScore}
        </p>
        <p className="text-xl text-gray-700 mb-6">Your Rank: {results.rank}</p>
        <h2 className="text-3xl font-semibold mb-4">Leaderboard:</h2>
        <ul className="list-disc pl-5 text-lg text-gray-800">
          {results.leaderboard.map((entry: any, index: number) => (
            <li key={index}>Score: {entry.score}</li>
          ))}
        </ul>
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full md:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-xl font-semibold rounded-lg shadow-md transition-all"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const currentQuestion = quizDetails.questions[currentQuestionIndex];

  return (
    <div className="p-4 sm:p-6 w-full md:w-10/12 lg:w-9/12 mx-auto h-screen space-y-6 md:space-y-12 text-gray-900">
      <h1 className="text-2xl md:text-5xl font-semibold mt-2 mb-5">
        {quizDetails.title}
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-700">
            Question {currentQuestionIndex + 1}
          </h2>
          <p className="text-lg md:text-xl lg:text-4xl m-3 text-gray-800">
            {currentQuestion.questionText}
          </p>
        </div>

        <div className="flex-1">
          <ul className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleAnswer(option)}
                  className={`w-full px-4 py-3 md:px-6 md:py-4 text-left text-base md:text-lg font-medium border rounded-lg shadow-md ${
                    selectedAnswer === option
                      ? "bg-green-500 text-white border-green-700"
                      : "bg-purple-200 text-gray-900 hover:bg-purple-300"
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between">
        <button
          onClick={handleNextQuestion}
          className={`w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-lg font-semibold text-white rounded-lg shadow-md ${
            selectedAnswer
              ? "bg-purple-500 hover:bg-purple-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedAnswer}
        >
          Next Question
        </button>
        <button
          onClick={handleNextQuestion}
          className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-lg font-semibold text-white bg-purple-400 hover:bg-purple-600 rounded-lg shadow-md"
        >
          Skip Question
        </button>
      </div>
    </div>
  );
};

export default QuizStart;
