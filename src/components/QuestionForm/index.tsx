import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm: React.FC = () => {
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
      .post('http://localhost:5000/api/question/create', payload, {
        headers: { Authorization: token },
      })
      .then((res) => alert('Question Created Successfully'))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-4  rounded-md mb-6">
      <h2 className="text-lg font-semibold mb-2">Add a New Question</h2>
      <label className="block font-semibold">Question Text</label>
      <input
        type="text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        className="w-full p-2 border bg-gray-800 border-gray-300 rounded-md"
        placeholder="Enter question text"
      />

      <label className="block font-semibold mt-4">Options</label>
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
          className="w-full p-2 border bg-gray-800 border-gray-300 rounded-md mb-2"
          placeholder={`Option ${index + 1}`}
        />
      ))}

      <label className="block font-semibold mt-4">Correct Answer</label>
      <input
        type="text"
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
        className="w-full p-2 border bg-gray-800 border-gray-300 rounded-md"
        placeholder="Enter correct answer"
      />

      <label className="block font-semibold mt-4">Difficulty</label>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="w-full p-2 border bg-gray-800 border-gray-300 rounded-md"
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <label className="block font-semibold mt-4">Subject</label>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full p-2 border bg-gray-800 border-gray-300 rounded-md"
        placeholder="Enter subject"
      />

      <button
        onClick={handleCreateQuestion}
        className="mt-4 bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
      >
        Create Question
      </button>
    </div>
  );
};

export default QuestionForm;
