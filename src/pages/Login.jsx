import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!email.trim()) {
      temp.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      temp.email = "Invalid email format";
    }

    if (!password.trim()) {
      temp.password = "Password is required";
    } else if (password.length < 6) {
      temp.password = "Password must be at least 6 characters";
    }

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      // Fake API delay for demo
      await new Promise((resolve) => setTimeout(resolve, 1500));

      alert("Logged in successfully!");
      
      // Your login API here:
      // const res = await axios.post("/login", { email, password });
      // localStorage.setItem("token", res.data.token);
      
    } catch (error) {
      alert("Login failed!");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin}>
          {/* EMAIL */}
          <div className="mb-4">
            <label className="block text-black mb-1">Email</label>
            <input
              type="text"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.email ? "border-red-500" : ""
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mb-4 relative">
            <label className="block text-black mb-1">Password</label>

            <input
              type={passwordVisible ? "text" : "password"}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                errors.password ? "border-red-500" : ""
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Eye Icon */}
            <span
              className="absolute right-3 top-10 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <AiOutlineEyeInvisible size={22} />
              ) : (
                <AiOutlineEye size={22} />
              )}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
