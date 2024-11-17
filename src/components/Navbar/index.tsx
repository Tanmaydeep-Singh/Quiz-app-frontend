import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="relative top-4 flex items-center justify-between mx-auto p-4 pb-6 w-11/12 max-w-4xl lg:w-3/5 z-50 rounded-full shadow-2xl backdrop-blur-md bg-gradient-to-r from-[rgba(0,0,0,0.8)] via-gray-900 to-[rgba(0,0,0,0.8)] bg-opacity-30">
      <div className="flex items-center">
        <Link to="/" className="text-white font-serif text-3xl font-bold mr-10">
          Quiz<span className="text-gray-400">App</span>
        </Link>
      </div>

      <div className="flex space-x-6">
 

        <Link to="/profile" className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition duration-300">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
