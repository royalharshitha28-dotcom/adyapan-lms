import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-700"
        >
          Adyapan LMS
        </Link>

        <div className="space-x-5">

          <Link to="/">Home</Link>

          <Link to="/courses">Courses</Link>

          <Link to="/login">Login</Link>

          <Link to="/register">Register</Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;