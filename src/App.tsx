import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";
import Layout from "./components/Layout";
import Signup from "./pages/Signup";
import QuizStart from "./pages/QuizStart";
import CreateQuiz from "./pages/CreateQuiz";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black shadow-md backdrop-blur-md bg-opacity-30">
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/results" element={<Result />} />
          <Route path="/create-quiz" element={<CreateQuiz />} />


        </Route>
        <Route path="/quiz/:id/start" element={<QuizStart />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
