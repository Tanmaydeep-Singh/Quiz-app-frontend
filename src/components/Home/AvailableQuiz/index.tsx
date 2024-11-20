import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuizCard from './QuizCard';

interface Quiz {
  quizId: string;
  title: string;
  description: string;
}

function Index() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  
  const [error, setError] = useState<string | null>(null);  


  useEffect(() => {
    axios.get('http://localhost:5000/api/quizzes/')
      .then((response) => {
        setQuizzes(response.data.quizzes.slice(0, 6));  
        setLoading(false);  
      })
      .catch((err) => {
        setError('Error fetching quizzes');
        setLoading(false);
      });
  }, []);  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-4">Available Quizzes</h2>
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
}

export default Index;
