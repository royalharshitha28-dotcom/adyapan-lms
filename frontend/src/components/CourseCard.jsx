function CourseCard({ title, description }) {
  return (

    <div className="bg-white rounded-xl shadow-lg p-6">

      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>

    </div>
  );
}

export default CourseCard;