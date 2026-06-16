
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import Register from "../pages/Register";
import StudentDashboard from "../pages/StudentDashboard";
import Profile from "../pages/Profile";
import ProtectedRoute from "../components/ProtectedRoute";
import CourseDetails from "../pages/CourseDetails";
import MyCourses from "../pages/MyCourses";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
        <Route
  path="/courses/:id"
  element={<CourseDetails />}
/>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
<Route
  path="/my-courses"
  element={
    <ProtectedRoute>
      <MyCourses />
    </ProtectedRoute>
  }
/>

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default AppRoutes;