import React from 'react';

interface QuestionCardProps {
  question: any;
  onAdd: () => void;
}

const QuestionCard = ({ question, onAdd } : QuestionCardProps) => {
  return (
    <div className="p-4 border rounded-md">
      <h3 className="font-semibold">{question.questionText}</h3>
      <p className="text-sm text-gray-600">Difficulty: {question.difficulty}</p>
      <button
        onClick={onAdd}
        className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Add to Quiz
      </button>
    </div>
  );
};

export default QuestionCard;
