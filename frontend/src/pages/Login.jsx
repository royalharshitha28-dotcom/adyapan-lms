import { useState } from "react";
import { loginUser } from "../api/authService";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await loginUser(form);

    localStorage.setItem(
      "access",
      response.data.access
    );

    localStorage.setItem(
      "refresh",
      response.data.refresh
    );

    alert("Login Successful");
    navigate("/dashboard");

  };

  return (
    <div className="max-w-lg mx-auto py-16">

      <h1 className="text-3xl font-bold mb-6">

        Login

      </h1>

      <form onSubmit={handleSubmit}>

        <input
          className="border w-full p-3 mb-3"
          placeholder="Username"
          onChange={(e) =>
            setForm({
              ...form,
              username: e.target.value
            })
          }
        />

        <input
          type="password"
          className="border w-full p-3 mb-3"
          placeholder="Password"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value
            })
          }
        />

        <button
          className="bg-blue-700 text-white px-6 py-3"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;