import RecentActivities from "../components/Home/RecentActivities";
import Quote from "../components/Home/Quote";
import Quiz from "./Quiz";
import AvailableQuiz from "../components/Home/AvailableQuiz";



const Home = () => {
  

  const leaderboard = [
    { name: "Alice", score: 96 },
    { name: "Bob", score: 91 },
    { name: "Charlie", score: 89 },
  ];

  return (
    <div className="min-h-screen  text-white p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold ">Welcome to the Quiz Platform</h1>
        <p className="text-gray-600 mt-2">Choose a quiz and track your progress!</p>
      </header>


      <AvailableQuiz/>
    
      <RecentActivities/>
     
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Leaderboard</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ol className="list-decimal ml-6">
            {leaderboard.map((user, index) => (
              <li key={index} className="text-gray-800">
                {user.name}: <span className="font-semibold">{user.score}%</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
        
        <Quote/>

    </div>
  );
};

export default Home;
