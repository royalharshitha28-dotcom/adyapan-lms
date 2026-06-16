import { useEffect, useState } from "react";
import { getCourses } from "../api/courseService";

function Courses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    loadCourses();

  }, []);

  const loadCourses = async () => {

    const data = await getCourses();

    setCourses(data);

  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">

      <h1 className="text-4xl font-bold mb-8">

        All Courses

      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {courses.map((course) => (

          <div
            key={course.id}
            className="shadow-lg rounded-xl p-6"
          >

            <h2 className="text-xl font-bold">

              {course.title}

            </h2>

            <p className="mt-3">

              {course.description}

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Courses;