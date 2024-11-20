import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionForm from '../components/QuestionForm';
import QuestionCard from '../components/QuestionCard';

const CreateQuiz = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [availableQuestions, setAvailableQuestions] = useState<any[]>([]);

  const token = `Bearer ${localStorage.getItem('token')}`;

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/question/', {
        headers: { Authorization: token },
      })
      .then((res) => setAvailableQuestions(res.data))
      .catch((err) => console.error(err));
  }, [token]);

  const handleAddQuestion = (questionId: string , question: string) => {
    if (!selectedQuestions.includes(questionId)) {
      console.log("Question ID" ,questionId)
      
      setSelectedQuestions([...selectedQuestions, questionId]);
    }
  };

  const handleCreateQuiz = () => {
    const payload = {
      title,
      description,
      questionIds: selectedQuestions,
    };

    console.log("Payload", payload)
    axios
      .post('http://localhost:5000/api/quizzes/create', payload, {
        headers: { Authorization: token },
      })
      .then(() => alert('Quiz Created Successfully'))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Create a New Quiz</h1>

      <div className="mb-6">
        <label className="block font-semibold">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-300 text-white rounded-md"
          placeholder="Enter quiz title"
        />
        <label className="block font-semibold mt-4">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 bg-gray-800 border border-gray-300 text-white rounded-md"
          placeholder="Enter quiz description"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Selected Questions</h2>
        <ul>
          {selectedQuestions.map((id) => (
            <li key={id} className="p-2 border rounded-md mb-2">
              {id}
            </li>
          ))}
        </ul>
      </div>

      <QuestionForm />

      <div>
        <h2 className="text-lg font-semibold mb-2">Available Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableQuestions.map((question) => (
            <QuestionCard
              key={question._id}
              question={question}
              onAdd={() => handleAddQuestion(question._id, question)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleCreateQuiz}
        className="mt-6 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Create Quiz
      </button>
    </div>
  );
};

export default CreateQuiz;
