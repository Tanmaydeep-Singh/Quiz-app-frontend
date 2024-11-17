import React from "react";
import { useNavigate } from "react-router-dom";

interface QuizProps {
  quiz: {
    id: string;
    title: string;
    description: string;
  };
}

const QuizCard  = ({ quiz } : QuizProps) => {
  const navigate = useNavigate();

  return (
    <div
      key={quiz.id}
      className="bg-slate-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
    >
      <h3 className="text-2xl font-semibold text-white">{quiz.title}</h3>
      <p className="text-gray-600 mt-2">{quiz.description}</p>
      <button
        onClick={() => navigate(`/quiz/${quiz.id}`)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizCard;
