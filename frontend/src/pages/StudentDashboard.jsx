function StudentDashboard() {

  return (

    <div className="max-w-7xl mx-auto py-12 px-6">

      <h1 className="text-4xl font-bold mb-6">

        Student Dashboard

      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white shadow rounded-xl p-6">
          My Courses
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          Certificates
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          Quiz Results
        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;