
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login"); // login or register

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "register") {
        await axios.post("http://localhost:7000/api/auth/register", {
          firstName,
          lastName,
          email,
          username,
          password
        });

        alert("Registered successfully! You can now login.");
        setMode("login");
        return;
      }

      const res = await axios.post("http://localhost:7000/api/auth/login", {
        username,
        password
      });

      localStorage.setItem("token", res.data.token);
      navigate("/farms");
    } catch (err) {
      alert(err.response?.data?.message || "Auth error");
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {mode === "login" ? "Login" : "Create Account"}
        </h3>

        <form onSubmit={submit} className="space-y-4">
          {mode === "register" && (
            <>
              <input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </>
          )}

          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="text-blue-600 hover:underline font-medium"
          >
            {mode === "login"
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
