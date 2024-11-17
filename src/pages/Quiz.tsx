import React from "react";
import { useNavigate } from "react-router-dom";

interface QuizDetails {
  id: string;
  title: string;
  subject: string;
  totalQuestions: number;
  description: string;
}

const quiz: QuizDetails = {
  id: "quiz-1",
  title: "Mathematics Fundamentals",
  subject: "Mathematics",
  totalQuestions: 15,
  description:
    "Test your knowledge on algebra, geometry, and arithmetic with this fundamental quiz. Perfect for students in grades 7-10.",
};

const rules: string[] = [
  "Read all questions carefully before answering.",
  "You cannot skip questions. Once answered, you cannot go back.",
  "Each question has a time limit of 60 seconds.",
  "Choose the most appropriate answer from the given options.",
  "Points are awarded based on correctness and time taken.",
  "Avoid refreshing or navigating away from the quiz page to prevent disqualification.",
  "Submit the quiz before the time limit to ensure your answers are recorded.",
];

const Quiz = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate(`/quiz/${quiz.id}/start`);
  };

  return (
    <div className=" flex justify-center p-6">
      <div className="max-w-4xl w-full  rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-white mb-6  ">
          {quiz.title}
        </h1>
        <div className="  text-lg text-gray-400 mb-8">
          <p>
            <strong>Subject:</strong> {quiz.subject}
          </p>
          <p>
            <strong>Total Questions:</strong> {quiz.totalQuestions}
          </p>
        </div>
        <p className="text-gray-300 text-base mb-8 text-justify">
          {quiz.description}
        </p>

        <h2 className="text-3xl font-bold text-gray-300 mb-6  ">
          Quiz Rules
        </h2>
        <ul className="list-disc text-lg text-gray-400 space-y-4 mb-10 px-6">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>

        <div className="flex justify-center">
          <button
            onClick={handleStartQuiz}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full shadow-lg transition duration-300"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
