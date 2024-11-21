import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/Images/BG1.jpeg";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);

      navigate("/");
    } catch (err) {
      setError("Invalid credentials, please try again.");
    }
  };

  const handleSwitchToSignup = () => {
    navigate("/signup");
  };

  return (
    <div
    className="flex justify-center items-center min-h-screen bg-cover bg-center bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 "
    >
      <div 
        className="max-w-md w-full px-8 py-6  bg-opacity-70 backdrop-blur-xl rounded-lg shadow-xl border  border-white/60 bg-white/30"
>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center mb-6">
          MindVault
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Login</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-100 bg-opacity-50 text-gray-900 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-100 bg-opacity-50 text-gray-900 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-500  rounded-md focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={handleSwitchToSignup}
              className="text-blue-400 hover:underline"
            >
              Signup here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
