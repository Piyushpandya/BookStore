import React from "react";
import { Link } from "react-router";
import Login from "./Login";
import { useState } from "react";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleLogin = () => {
    <Login />;
  };
  return (
    <div>
      <Login isOpen={isModalOpen} closeModal={closeModal} />
      <div className="navbar bg-gray-100 p-3  w-screen flex gap-4  justify-between fixed top-0 left-0 right-0 z-50 ">
        <div className="ml-5 font-bold cursor-pointer text-xl">BookStore</div>
        <ul className="flex gap-6 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Course</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button
          className="bg-blue-600 text-white rounded-md  mr-10 h-8 w-17 cursor-pointer hover:bg-blue-800 "
          onClick={openModal}
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Navbar;
