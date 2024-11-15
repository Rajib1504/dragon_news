import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md border-2 border-red-300 p-8 space-y-6 bg-base-100 rounded shadow-lg">
        {/* Title */}
        <h2 className="text-2xl mb-10 mt-1 font-bold text-center">
          Login your account
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-2">
          {/* Email Field */}

          <h2 className="text-left font-semibold">Email Address:</h2>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full pl-4 p-2.5 text-gray-900  bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          />

          {/* Password Field */}
          <h2 className="text-left font-semibold">Password:</h2>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full pl-10 p-2.5  bg-gray-200  text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          />
        </form>
        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-2 text-white mt-6 bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none"
        >
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500">
          Don’t Have An Account?{" "}
          <Link to="/auth/register" className="text-red-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
