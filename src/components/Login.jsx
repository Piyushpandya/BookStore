import React from "react";
import SignUp from "./SignUp";
import { Link } from "react-router";
import { useForm } from "react-hook-form";

const Login = ({ isOpen, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-20 flex justify-center items-center z-50 ">
          {/* Modal */}
          <div className="bg-white p-6 rounded-lg w-120">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Login</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                X
              </button>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  Login
                </button>
                <div className="register flex">
                  <p className=" flex justify-center items-center">New User?</p>
                  <Link
                    to="/signup"
                    className=" ml-1 text-blue-500 flex justify-center items-center underline "
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
