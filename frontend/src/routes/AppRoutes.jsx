import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
  path="/login"
  element={<Login />}
/>

<Route
  path="/register"
  element={<Register />}
/>
<Route
          path="/courses"
          element={<Courses />}
        />

      </Routes>
      <Footer />
        
    </BrowserRouter>
  );
}

export default AppRoutes;