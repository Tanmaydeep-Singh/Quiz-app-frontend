import React from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/create-quiz');
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 p-8  rounded-lg  text-center">
      <h2 className="text-3xl font-semibold text-white mb-4">Create a Quiz</h2>
      <p className="text-lg text-gray-600 mb-6">
        Start by creating your own quiz. Customize it with a title, questions, and answers to make it fun and engaging.
      </p>
      <button
        onClick={handleNavigation}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
      >
        Create New Quiz
      </button>
    </div>
  );
};

export default Index;
