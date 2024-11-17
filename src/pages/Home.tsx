import RecentActivities from "../components/Home/RecentActivities";
import Quote from "../components/Home/Quote";
import AvailableQuiz from "../components/Home/AvailableQuiz";
import MyQuiz from "../components/Home/MyQuiz";
import CreateQuiz from "../components/Home/CreateQuiz";



const Home = () => {
  

  
  return (
    <div className="min-h-screen  text-white p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold ">Welcome to the Quiz Platform</h1>
        <p className="text-gray-600 mt-2">Choose a quiz and track your progress!</p>
      </header>


      <AvailableQuiz/>
    
      <RecentActivities/>


       <MyQuiz/>

       <CreateQuiz/>
     
     
        
        <Quote/>

    </div>
  );
};

export default Home;
