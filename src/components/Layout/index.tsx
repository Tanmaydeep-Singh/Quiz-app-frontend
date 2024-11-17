import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-black via-gray-900 to-black shadow-md backdrop-blur-md bg-opacity-30">
      <Navbar />
      <main className="flex-grow w-full md:w-[80vw] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
