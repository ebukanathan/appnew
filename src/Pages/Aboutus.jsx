import React from "react";
import highfront from "../assets/highfront.jpg";
import highearly from "../assets/highearly.jpg";
import highgrade from "../assets/highgrade.jpg";

function Aboutus() {
  return (
    <div>
      <section className="w-full py-12 px-6 md:px-12 lg:px-20 bg-gray-100 opacity-0 animate-fadeIn">
        {/* School Introduction */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About Our School
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Established in {new Date().getFullYear() - 5}, our school in Abuja
            has been a center for academic excellence, character building, and
            holistic development. We are committed to nurturing young minds to
            become future leaders through innovative education and a supportive
            learning environment.
          </p>
        </div>

        {/* Images Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src={highfront}
            alt="School"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
          <img
            src={highearly}
            alt="Students"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
          <img
            src={highgrade}
            alt="Library"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
        </div>

        {/* Mission, Vision, Core Values */}
        <div className="mt-16 space-y-12">
          {/* Mission */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              To provide a dynamic and inclusive learning environment that
              empowers students with knowledge, skills, and values to succeed in
              a rapidly changing world.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
            <p className="mt-4 text-gray-600 text-lg">
              To be a leading institution in academic excellence, character
              development, and innovative education, shaping the leaders of
              tomorrow.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Core Values
            </h2>
            <ul className="mt-4 text-gray-600 text-lg list-disc list-inside space-y-2">
              <li>Excellence</li>
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Respect</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
