import React from 'react';
import { useNavigate } from 'react-router-dom';

interface QuizProps {
  quiz: {
    id: string;
    title: string;
    description: string;
  };
}

const QuizCard = ({ quiz }: QuizProps) => {
  const navigate = useNavigate();

  return (
    <div
      key={quiz.id}
      className=" bg-white/60 bg-opacity-70 backdrop-blur-xl rounded-lg border border-white shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      >
      <h3 className="text-2xl font-bold text-purple-700">{quiz.title}</h3>
      <p className="text-gray-600 mt-2 line-clamp-3">{quiz.description.slice(0, 30) + '...'}</p>
      <button
        onClick={() => navigate(`/quiz/${quiz.id}`)}
        className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition duration-300"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizCard;
