// components/Footer.tsx

const Footer = () => {
    return (
      <footer className="bg-background-card text-primary-100 py-8 text-gray-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary-100">About QuizApp</h2>
            <p className="text-primary-200">
              QuizApp is your ultimate destination for engaging and educational quizzes. Test your knowledge across various topics and compete with friends to see who’s the best!
            </p>
          </div>
  
          <div className="border-t border-primary-200 pt-4 text-center">
            <p className="text-primary-200 text-sm">
              &copy; {new Date().getFullYear()} QuizApp. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  