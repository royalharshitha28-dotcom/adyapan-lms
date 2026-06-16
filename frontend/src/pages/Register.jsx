import { useState } from "react";
import { registerUser } from "../api/authService";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "student"
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

  const response = await registerUser(form);

  console.log(response.data);

  alert("Registration Successful");
  navigate("/login");

} catch (error) {

  console.log(error.response.data);

  alert(JSON.stringify(error.response.data));

}

  };

  return (
    <div className="max-w-lg mx-auto py-16">

      <h1 className="text-3xl font-bold mb-6">

        Register

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
          className="border w-full p-3 mb-3"
          placeholder="Email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
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
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;