import { useEffect, useState } from "react";
import { getEnrollments } from "../api/enrollmentService";

function MyCourses() {

  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {

    loadEnrollments();

  }, []);

  const loadEnrollments = async () => {

    const data = await getEnrollments();

    setEnrollments(data);
  };

  return (

    <div className="max-w-7xl mx-auto py-12 px-6">

      <h1 className="text-4xl font-bold mb-8">

        My Courses

      </h1>

      {
        enrollments.map((item) => (

          <div
            key={item.id}
            className="shadow p-4 mb-4"
          >
            Course ID: {item.course}
          </div>

        ))
      }

    </div>
  );
}

export default MyCourses;