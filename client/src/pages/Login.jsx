import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    // TODO: Add login logic here (API call)
    alert(`Logged in as ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
      <form
        className="bg-white shadow-lg rounded-xl px-8 py-10 w-full max-w-md flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-2">
          Login
        </h2>
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-center text-sm">
            {error}
          </div>
        )}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            autoComplete="username"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            autoComplete="current-password"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>
        <button
          type="submit"
          className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded shadow transition"
        >
          Login
        </button>
        <div className="text-center text-sm text-gray-500 mt-2">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
