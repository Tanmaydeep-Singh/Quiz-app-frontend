import RecentActivities from "../components/Home/RecentActivities";
import Quote from "../components/Home/Quote";
import AvailableQuiz from "../components/Home/AvailableQuiz";
import MyQuiz from "../components/Home/MyQuiz";
import CreateQuiz from "../components/Home/CreateQuiz";



const Home = () => {
  

  
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-blue-100 to-purple-50 text-gray-800 p-8">
    <header className="text-center mb-12 flex flex-col justify-center h-[60vh] ">
      <h1 className="text-5xl ">Welcome to</h1>
      <h1 className="text-6xl font-semibold text-purple-700">MindVault</h1>

      <p className="text-gray-700 mt-4 text-lg">
        Unlock knowledge, challenge yourself, and track your progress!
      </p>
    </header>
  
    <section className="mb-12">
      <AvailableQuiz />
    </section>
  
    <section className="mb-12">
      <RecentActivities />
    </section>
  
    <section className="mb-12">
      <MyQuiz />
    </section>
  
    <section className="mb-12">
      <CreateQuiz />
    </section>
  
    <section className="text-center mt-16">
      <Quote />
    </section>
  </div>
  
  );
};

export default Home;
