import { useLocation } from "react-router-dom";

interface QuizResultState {
  userScore: number;
  userName: string;
  timeTaken: string;
  rank: number;
  easyScore: number;
  mediumScore: number;
  hardScore: number;
  totalQuestions: number;
  leaderboard: { userName: string; score: number }[];
}

const Result = () => {
  const {
    userScore,
    userName,
    timeTaken,
    rank,
    easyScore,
    mediumScore,
    hardScore,
    totalQuestions,
    leaderboard,
  }: QuizResultState = {
    userScore: 75,
    userName: "John Doe",
    timeTaken: "15:30",
    rank: 5,
    easyScore: 25,
    mediumScore: 30,
    hardScore: 20,
    totalQuestions: 20,
    leaderboard: [
      { userName: "Alice", score: 90 },
      { userName: "Bob", score: 85 },
      { userName: "Charlie", score: 80 },
      { userName: "David", score: 78 },
      { userName: "John Doe", score: 75 },
      { userName: "Eve", score: 70 },
    ],
  };

  return (
    <div className="min-h-screen  text-gray-300 font-sans">
      <div className="max-w-4xl mx-auto p-10">
        <h1 className="text-center text-4xl font-extrabold text-white mb-20">
          Quiz Results for {userName}
        </h1>

        <div className="p-10 rounded-lg  mb-6">
          <h2 className="text-4xl font-semibold text-white mb-4">Summary</h2>
          <p className="text-gray-300 text-xl"><strong>Total Questions:</strong> {totalQuestions}</p>
          <p className="text-gray-300 text-xl"><strong>Your Total Score:</strong> {userScore}</p>
          <p className="text-gray-300 text-xl"><strong>Time Taken:</strong> {timeTaken}</p>
          <p className="text-gray-300 text-xl"><strong>Your Rank:</strong> #{rank}</p>
        </div>

        <div className=" p-10 rounded-lg shadow-lg mb-6">
          <h3 className="text-4xl font-semibold text-white mb-4">
            Performance by Difficulty
          </h3>
          <ul className="list-none pl-4 space-y-3 text-gray-300">
            <li><strong>Easy:</strong> {easyScore}</li>
            <li><strong>Medium:</strong> {mediumScore}</li>
            <li><strong>Hard:</strong> {hardScore}</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-4">Leaderboard</h3>
          <ol className="list-decimal pl-6 text-gray-300 space-y-3">
            {leaderboard.map((entry, index) => (
              <li
                key={index}
                className="border-b border-gray-700 pb-2 last:border-none hover:text-gray-100"
              >
                <strong>{entry.userName}:</strong> {entry.score} points
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Result;
