import { Link, useNavigate } from "react-router-dom";
import { logout, isAuthenticated } from "../utils/auth";

function Navbar() {

  const navigate = useNavigate();

  const loggedIn = isAuthenticated();

  const handleLogout = () => {

    logout();

    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-700"
        >
          Adyapan LMS
        </Link>

        <div className="space-x-5 flex items-center">

          <Link to="/">Home</Link>

          <Link to="/courses">Courses</Link>

          {loggedIn && (
            <Link to="/dashboard">
              Dashboard
            </Link>
          )}
          {loggedIn && (
  <Link to="/my-courses">
    My Courses
  </Link>
)}

          {loggedIn && (
            <Link to="/profile">
              Profile
            </Link>
          )}

          {!loggedIn && (
            <>
              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>
            </>
          )}

          {loggedIn && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;