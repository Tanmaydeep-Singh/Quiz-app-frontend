import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateQuizSection = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/create-quiz');
  };

  return (
    <div className="max-w-3xl mx-auto mt-16 p-8   text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Create Your Quiz</h2>
      <p className="text-lg text-gray-600 mb-8">
        Craft your own quizzes and challenge others! Personalize them with unique titles, engaging questions, and answers.
      </p>
      <button
        onClick={handleNavigation}
        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-full hover:bg-blue-700 hover:shadow-xl transition duration-300"
      >
        Start Creating
      </button>
    </div>
  );
};

export default CreateQuizSection;
