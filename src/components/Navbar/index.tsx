import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between mx-auto mt-5  w-11/12 max-w-4xl px-6 py-4 shadow-lg bg-gradient-to-r from-blue-100 via-blue-200 to-purple-200 rounded-lg">
      <div className="flex items-center">
        <Link to="/" className="text-gray-800 font-serif text-3xl font-bold">
          Mind<span className="text-purple-600">Vault</span>
        </Link>
      </div>

      <div className="flex space-x-6">
        
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-red-400 to-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
