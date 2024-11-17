const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-4 mt-auto">
      <p>&copy; 2024 QuizApp. All Rights Reserved.</p>
      <p>
        <a href="/about" className="hover:text-gray-300">About</a> |{" "}
        <a href="/contact" className="hover:text-gray-300">Contact</a>
      </p>
    </footer>
  );
};

export default Footer;
