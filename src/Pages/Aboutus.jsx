import React from "react";
import highfront from "../assets/highfront.jpg";
import highearly from "../assets/highearly.jpg";
import highgrade from "../assets/highgrade.jpg";
import SectionHero from "../components/SectionHero";
import hall from "../assets/hall.jpg";
import frontoffice from "../assets/frontoffice.jpg";
import frontview from "../assets/frontview.jpg";
function Aboutus() {
  return (
    <div>
      <section className="w-full py-12 px-6 md:px-12 lg:px-20 bg-gray-100 opacity-0 animate-fadeIn">
        {/* School Introduction */}
        <div className="max-w-4xl mx-auto text-center bg-['frontoffice']">
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
            src={frontview}
            alt="Library"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
          <img
            src={frontoffice}
            alt="Students"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />

          <img
            src={hall}
            alt="School"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
        </div>

        {/* Mission, Vision, Core Values */}
        <div className="mt-16 space-y-12 ">
          {/* Mission */}
          <div
            className="bg-white w-full shadow-lg rounded-lg p-8 bg-center bg-cover "
            // style={{ backgroundImage: `url(${hall})` }}
          >
            <div className="p-8 md:w-2/3 ">
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Mission
              </h2>
              <p className="mt-4  text-gray-600 text-lg">
                To provide a dynamic and inclusive learning environment that
                empowers students with knowledge, skills, and values to succeed
                in a rapidly changing world.
              </p>
            </div>
            {/* Vision */}
            <div className="p-8 md:w-2/3">
              <h2 className="text-3xl font-semibold text-gray-800">
                Our Vision
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                To be a leading institution in academic excellence, character
                development, and innovative education, shaping the leaders of
                tomorrow.
              </p>
            </div>

            {/* Core Values */}
            <div className="p-8 md:w-2/3">
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
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
