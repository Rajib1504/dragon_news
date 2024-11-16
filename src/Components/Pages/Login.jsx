import React, { useContext, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { setUser, loginUser } = useContext(AuthContext);
  const [fail, setFail] = useState("");
  const [success, setSuccess] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // reset vlaue
    setFail("");
    setSuccess(false);

    console.log({ email, password });
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setSuccess(true);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setFail(errorMessage);
        // alert(errorMessage);
        return;
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md border-2 border-red-300 p-8 space-y-6 bg-base-100 rounded shadow-lg">
        {/* Title */}
        <h2 className="text-2xl mb-10 mt-1 font-bold text-center">
          Login your account
        </h2>

        {/* Form */}
        <form onSubmit={handelSubmit} className="flex flex-col gap-2">
          {/* Email Field */}

          <h2 className="text-left font-semibold">Email Address:</h2>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full pl-4 p-2.5 text-gray-900  bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          />

          {/* Password Field */}
          <h2 className="text-left font-semibold">Password:</h2>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full pl-10 p-2.5  bg-gray-200  text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          />
          {success && <p className="text-green-400">Login successful</p>}
          {success && <Navigate to={"/"}></Navigate>}
          {fail && <p className="text-red-500">{fail}</p>}
          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 btn text-white mt-6 bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none"
          >
            Login
          </button>
        </form>

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
