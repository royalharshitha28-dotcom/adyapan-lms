import { useParams } from "react-router-dom";
import { createEnrollment } from "../api/enrollmentService";

function CourseDetails() {

  const { id } = useParams();

  const enrollNow = async () => {

    try {

      await createEnrollment({
        student: 1,
        course: id
      });

      alert("Enrollment Successful");

    } catch (error) {

      console.log(error);

      alert("Enrollment Failed");
    }
  };

  return (

    <div className="max-w-7xl mx-auto py-12 px-6">

      <h1 className="text-4xl font-bold">

        Course Details

      </h1>

      <p className="mt-4">

        Course ID: {id}

      </p>

      <button
        onClick={enrollNow}
        className="bg-blue-700 text-white px-6 py-3 rounded mt-6"
      >
        Enroll Now
      </button>

    </div>
  );
}

export default CourseDetails;