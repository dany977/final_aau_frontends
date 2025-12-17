import axios from "axios";

const instance = axios.create({
  baseURL: "https://final-project-aau-backend.onrender.com/api",
});

// 🔐 ADD TOKEN TO EVERY REQUEST
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 👈 must exist
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
