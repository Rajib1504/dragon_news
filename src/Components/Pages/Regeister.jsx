import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser, updateUserPofile, setUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [fail, setFail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    // console.log(form);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photoUrl");
    const password = form.get("password");
    const terms = form.get("terms");
    // console.log({ name, email, photo, password, terms });

    // reset the states
    setFail("");
    setSuccess(false);
    if (!terms) {
      setFail("Accpt the terms first");
      return;
    }
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    if (!regex.test(password)) {
      setFail(
        "Password should be at least 6 characters, contain at least one uppercase letter, and one special character."
      );
      return;
    } else {
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          updateUserPofile({ displayName: name, photoURL: photo })
            .then(() => {
              navigate("/");
            })
            .catch((error) => {
              // console.log(error);
            });
          // console.log(result.user);
          setSuccess(true);
        })
        .catch((error) => {
          const errorMessage = error.message;
          // console.log(errorMessage);
          setFail(errorMessage);
          return;
        });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6    border-2 border-red-400 rounded shadow-lg">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
          {/* Name Field */}

          <label className="block mb-1 text-sm text-left font-medium">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          />

          {/* Photo URL Field */}

          <label className="block mb-1 text-left text-sm font-medium">
            Photo URL
          </label>
          <input
            type="url"
            name="photoUrl"
            placeholder="Enter your photo URL"
            className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          />

          {/* Email Field */}

          <label className="block mb-1 text-sm text-left font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          />

          {/* Password Field */}

          <label className="block mb-1 text-sm text-left font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          />

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" name="terms" className="rounded" />
            <label className="text-sm text-gray-700">
              Accept{" "}
              <span className="text-blue-600 cursor-pointer">
                Term & Conditions
              </span>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full btn py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none"
          >
            Register
          </button>
          {success && (
            <p className="text-green-400 text-sm">Register successfully</p>
          )}
          {fail && <p className="text-red-500">{fail}</p>}
        </form>
        <p className="text-center text-sm text-gray-500">
          Already Have An Account?{" "}
          <Link to="/auth/Login" className="text-red-500 hover:underline">
            Login
          </Link>
        </p>

        {/* Register Link */}
      </div>
    </div>
  );
};

export default Register;
