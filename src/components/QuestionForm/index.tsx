import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = () => {
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [subject, setSubject] = useState('');
  const token = `Bearer ${localStorage.getItem('token')}`;

  const handleCreateQuestion = () => {
    const payload = {
      questionText,
      options,
      correctAnswer,
      difficulty,
      subject,
    };

    axios
      .post('https://quiz-app-frontend-beige.vercel.app/api/question/create', payload, {
        headers: { Authorization: token },
      })
      .then((res) => alert('Question Created Successfully'))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-6 rounded-lg shadow-sm bg-white mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Add a New Question</h2>

      <label className="block font-semibold text-gray-700">Question Text</label>
      <input
        type="text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:ring-blue-500 focus:border-blue-500 mb-4"
        placeholder="Enter question text"
      />

      <label className="block font-semibold text-gray-700">Options</label>
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          value={option}
          onChange={(e) => {
            const newOptions = [...options];
            newOptions[index] = e.target.value;
            setOptions(newOptions);
          }}
          className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:ring-blue-500 focus:border-blue-500 mb-4"
          placeholder={`Option ${index + 1}`}
        />
      ))}

      <label className="block font-semibold text-gray-700">Correct Answer</label>
      <input
        type="text"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:ring-blue-500 focus:border-blue-500 mb-4"
        placeholder="Enter correct answer"
      />

      <label className="block font-semibold text-gray-700">Difficulty</label>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:ring-blue-500 focus:border-blue-500 mb-4"
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <label className="block font-semibold text-gray-700">Subject</label>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700 focus:ring-blue-500 focus:border-blue-500 mb-4"
        placeholder="Enter subject"
      />

      <button
        onClick={handleCreateQuestion}
        className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
      >
        Create Question
      </button>
    </div>
  );
};

export default QuestionForm;
