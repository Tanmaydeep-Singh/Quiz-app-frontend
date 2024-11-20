import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface QuizDetails {
  id: string;
  title: string;
  questions: any;
  description: string;
}

const rules: string[] = [
  "Read all questions carefully before answering.",
  "You cannot skip questions. Once answered, you cannot go back.",
  "Each question has a time limit of 60 seconds.",
  "Choose the most appropriate answer from the given options.",
  "Points are awarded based on correctness and time taken.",
  "Avoid refreshing or navigating away from the quiz page to prevent disqualification.",
  "Submit the quiz before the time limit to ensure your answers are recorded.",
];

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState<QuizDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const token = localStorage.getItem("token");
      
      console.log(id);
      if (token) {
        axios
          .post(`http://localhost:5000/api/quizzes/start`, {
            "quizId": `${id}`,
          }, {
            headers: {
              Authorization: `Bearer ${token}`, 
            },

            
          })
          .then((response) => {
            setQuiz(response.data)
            setLoading(false);
          })
          .catch((err) => {
            setError("Error fetching quiz details");
            setLoading(false);
          });
      } else {
        setError("No authentication token found");
        setLoading(false);
      }
    }
  }, [id]);

  const handleStartQuiz = () => {
    navigate(`/quiz/${id}/start`);
  };

  if (loading) {
    return <div>Loading quiz details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!quiz) {
    return <div>Quiz not found.</div>;
  }

  return (
    <div className="flex justify-center p-6">
      <div className="max-w-4xl w-full rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-white mb-6">{quiz.title}</h1>
        <div className="text-lg text-gray-400 mb-8">
          <p>
            <strong>Total Questions:</strong> {quiz.questions.length}
          </p>
        </div>
        <p className="text-gray-300 text-base mb-8 text-justify">{quiz.description}</p>

        <h2 className="text-3xl font-bold text-gray-300 mb-6">Quiz Rules</h2>
        <ul className="list-disc text-lg text-gray-400 space-y-4 mb-10 px-6">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>

        <div className="flex justify-center">
          <button
            onClick={handleStartQuiz}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full shadow-lg transition duration-300"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
