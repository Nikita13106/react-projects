import React, { useContext, useState } from "react";
import userContext from "../UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl px-8 py-10 w-full max-w-md border border-purple-200">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
        Login
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-semibold text-gray-700 tracking-wide mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-300 focus:outline-none"
            placeholder="Enter your username"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-700 tracking-wide mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-300 focus:outline-none"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
