import React from 'react'
import QuizCard from './QuizCard';
interface Quiz {
    id: string;
    title: string;
    description: string;
  }
  

function Index() {
  
    const quizzes: Quiz[] = [
      { id: "math", title: "Mathematics Quiz", description: "Algebra, geometry, and arithmetic!" },
      { id: "science", title: "Science Quiz", description: "Biology, physics, and chemistry!" },
      { id: "history", title: "History Quiz", description: "Historical events and civilizations." },
    ];

    return (
    <section className="mb-8">
    <h2 className="text-3xl font-bold mb-4">Available Quizzes</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {quizzes.map((quiz) => (
        <QuizCard quiz={{
              id: quiz.id,
              title: quiz.title,
              description: quiz.description
          }} />
      ))}
    </div>
  </section>
)
}

export default Index;