import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../api/courseService";

function Courses() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {

    try {

      const data = await getCourses();

      setCourses(data);

    } catch (error) {

      console.error("Error loading courses:", error);

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-8">
          All Courses
        </h1>

        <p>Loading courses...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">

      <h1 className="text-4xl font-bold mb-8">
        All Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {courses.length > 0 ? (

          courses.map((course) => (

            <div
              key={course.id}
              className="shadow-lg rounded-xl p-6 bg-white"
            >

              <Link
                to={`/courses/${course.id}`}
                className="text-xl font-bold text-blue-700 hover:text-blue-900"
              >
                {course.title || course.name || "Untitled Course"}
              </Link>

              <p className="mt-3 text-gray-600">
                {course.description || "No description available"}
              </p>

            </div>

          ))

        ) : (

          <p>No courses available.</p>

        )}

      </div>

    </div>    
  );
}

export default Courses;