const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 via-blue-200 to-purple-200 py-6 text-gray-700">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          About <span className="text-purple-600">MindVault</span>
        </h2>
        <p className="text-gray-700">
          MindVault is your ultimate destination for engaging and thought-provoking quizzes. Explore diverse topics and challenge your knowledge!
        </p>
        <div className="border-t border-gray-300 mt-6 pt-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} <span className="text-purple-600">MindVault</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
