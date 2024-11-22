import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children } : ProtectedRouteProps) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
const App = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-50 via-blue-100 to-purple-50">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<Layout />}>
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/quiz/:id" 
              element={
                <ProtectedRoute>
                  <Quiz />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/about" 
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/results" 
              element={
                <ProtectedRoute>
                  <Result />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/create-quiz" 
              element={
                <ProtectedRoute>
                  <CreateQuiz />
                </ProtectedRoute>
              } 
            />
          </Route>

          <Route path="/quiz/:id/start" element={<QuizStart />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
