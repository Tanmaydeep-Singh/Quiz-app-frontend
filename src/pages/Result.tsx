import { useLocation } from "react-router-dom";

interface QuizResultState {
  userScore: number;
  userName: string;
}

const Result = () => {
  const location = useLocation();
  
  const { userScore, userName }: QuizResultState = location.state || { userScore: 0, userName: "" };

  return (
    <div>
      <h1>Results for {userName}</h1>
      <p>Your score: {userScore}</p>
    </div>
  );
};

export default Result;
