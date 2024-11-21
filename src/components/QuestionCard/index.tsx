import React from 'react';

interface QuestionCardProps {
  question: any;
  onAdd: () => void;
}

const QuestionCard = ({ question, onAdd }: QuestionCardProps) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition duration-300">
      <h3 className="font-semibold text-gray-800">{question.questionText}</h3>
      <p className="text-sm text-gray-600">Difficulty: {question.difficulty}</p>
      <button
        onClick={onAdd}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add to Quiz
      </button>
    </div>
  );
};

export default QuestionCard;
