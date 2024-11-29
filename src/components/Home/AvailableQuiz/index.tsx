import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuizCard from './QuizCard';

interface Quiz {
  quizId: string;
  title: string;
  description: string;
}

const Index = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('https://quiz-app-frontend-beige.vercel.app/api/quizzes/')
      .then((response) => {
        setQuizzes(response.data.quizzes.slice(0, 6)); // Limit to 6 quizzes
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load quizzes. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-lg font-semibold text-gray-700">Loading quizzes...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-lg font-semibold text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <section className="py-8  px-4 ">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">Explore Quizzes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.quizId}
            quiz={{
              id: quiz.quizId,
              title: quiz.title,
              description: quiz.description,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Index;
