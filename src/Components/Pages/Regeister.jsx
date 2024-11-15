import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    photoUrl: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // For now, it just logs the form data
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
            value={form.name}
            onChange={handleChange}
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
            value={form.photoUrl}
            onChange={handleChange}
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
            value={form.email}
            onChange={handleChange}
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
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full p-2.5 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          />

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={form.termsAccepted}
              onChange={handleChange}
              className="rounded"
            />
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
            className="w-full py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none"
          >
            Register
          </button>
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
