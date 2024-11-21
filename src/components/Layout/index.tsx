import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-blue-50 via-blue-100 to-purple-50">
      <Navbar />
      <main className="flex-grow w-full md:w-[80vw] mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
