import CourseCard from "../components/CourseCard";
function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-700 to-indigo-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-bold mb-6">
            Learn Skills.
            Build Career.
          </h1>

          <p className="text-xl mb-8">
            Industry-focused courses,
            mentorship and career growth.
          </p>

          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">
            Explore Courses
          </button>

        </div>

      </section>

      {/* Statistics Section */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div>
              <h2 className="text-4xl font-bold text-blue-700">
                5000+
              </h2>
              <p>Students</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-700">
                120+
              </h2>
              <p>Courses</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-700">
                95%
              </h2>
              <p>Placement Rate</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-700">
                50+
              </h2>
              <p>Mentors</p>
            </div>

          </div>

        </div>

      </section>
      <section className="bg-gray-100 py-16">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold mb-10">

      Featured Courses

    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <CourseCard
        title="Python Full Stack"
        description="Become a full stack developer."
      />

      <CourseCard
        title="Data Science"
        description="Learn machine learning and AI."
      />

      <CourseCard
        title="Cloud Computing"
        description="AWS, Azure and DevOps."
      />

    </div>

  </div>

</section>
<section className="py-16">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold mb-10">

      Student Success Stories

    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="shadow-lg p-6 rounded-xl">
        Great learning experience.
      </div>

      <div className="shadow-lg p-6 rounded-xl">
        Helped me get internship.
      </div>

      <div className="shadow-lg p-6 rounded-xl">
        Excellent mentorship.
      </div>

    </div>

  </div>

</section>

    </div>
  );
}

export default Home;