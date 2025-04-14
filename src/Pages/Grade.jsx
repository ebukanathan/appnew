import React from "react";
import SectionHero from "../components/SectionHero";
import grade from "../assets/grade.jpg";
import grade3 from "../assets/grade3.jpg";
import bbcourt from "../assets/bbcourt.jpg";
import gradepupils from "../assets/gradepupils.jpg";

function Grade() {
  return (
    <div>
      <SectionHero
        title="Primary"
        tagline="Our Primary School section provides a nurturing and engaging learning environment for children in Grades 1 to 6. We are committed to laying a strong foundation for lifelong learning by fostering curiosity, creativity, and critical thinking in our young learners."
        image={bbcourt}
      />

      <section className="w-full py-12 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Column - Image */}

          {/* Right Column - Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Curriculum
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              We believe that every child is unique, and our mission is to
              provide a stimulating, inclusive, and supportive setting where
              they can explore, create, and grow at their own pace. Through
              engaging experiences, we help children build strong foundations
              for future success, both academically and emotionally.
            </p> */}
            <h1 className=" text-3xl my-5  ">Our curriculum</h1>
            <p className="font-normal mb-5 text-justify">
              Our school provides a high-quality, globally competitive education
              by integrating the Nigerian curriculum with the British
              methodology in teaching and learning. This unique blend ensures
              that learners develop strong academic skills, critical thinking
              abilities, creativity, and global awareness while maintaining
              their cultural identity.
            </p>
            <p className="font-normal mb-5 text-justify">
              {" "}
              We employ learner-centered, inquiry-based learning, incorporating
              modern teaching techniques, technology, project-based learning,
              and interactive assessments to prepare learners for higher
              education both within Nigeria and internationally.{" "}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={grade3}
              alt="Placeholder"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Right Column - Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="font-normal mb-5 text-justify">
              {" "}
              We emphasize academic excellence, holistic development, technology
              integration, community engagement, inclusivity and modern
              infrastructure.
            </p>{" "}
            <p className="font-normal mb-5 text-justify">
              Our curriculum ensures that learners progress from foundational
              knowledge (key stage 1 Primary 1–3) to analytical and independent
              thinking ( key stage 2 Primary 4–6) while preparing them for
              higher education and global opportunities.
            </p>
          </div>
          {/* Left Column - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={gradepupils}
              alt="Placeholder"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Grade;
