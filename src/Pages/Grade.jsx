import React from "react";
import SectionHero from "../components/SectionHero";
import grade from "../assets/grade.jpg";
import grade3 from "../assets/grade3.jpg";
import bbcourt from "../assets/bbcourt.jpg";
import gradepupils from "../assets/gradepupils.jpg";

function Grade() {
  const subjects = [
    "English language ",
    "Mathematics ",
    "Basic science",
    "Physical and Health Education",
    "Christian and Religious Knowledge/Islamic Religious Knowledge",
    "National values",
    "Information and communication technology",
    "Music",
    "Native languages (Igbo, Yoruba and Hausa)",
    "Creative and Cultural Arts",
    "Quantitative reasoning",
    "Verbal reasoning",
  ];
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
            {/* <h1 className=" text-3xl my-5  ">Our curriculum</h1> */}
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
            <div className="py-3">
              <h2 className="text-xl font-semibold">
                key stage one (Lower Primary School)
              </h2>
            </div>
            <p className="font-normal mb-5 text-justify">
              Key Stage One, which includes grade 1, grade 2 and grade 3, is
              where our pupils begin to build on the solid foundation laid in
              the Early Years. At this stage, our focus is on nurturing
              curiosity, encouraging independence, and developing core academic
              and social skills in a supportive and stimulating environment.
            </p>{" "}
            <p className="font-normal mb-5 text-justify">
              Our dedicated KS1 team ensures that learning is both engaging and
              meaningful. Through a carefully structured curriculum, we focus on
              literacy, numeracy, science, ICT and the humanities, while also
              integrating creative subjects such as art, music, and physical
              education. Lessons are designed to be interactive, practical, and
              full of real-life context to make learning exciting and relevant
              for our young learners.
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
      <section className="w-full py-12 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Right Column - Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="py-3">
              <h2 className="text-xl font-semibold">
                Key Stage Two (Upper Primary School)
              </h2>
            </div>
            <p className="font-normal mb-5 text-justify">
              Key Stage Two, which includes grade 3 to 6, is a time of
              remarkable development — academically, socially, and emotionally.
              At this stage, we aim to challenge, inspire, and support each
              child as they progress through a broad and balanced curriculum
              designed to spark curiosity and build resilience
            </p>{" "}
            <p className="font-normal mb-5 text-justify">
              In KS2, pupils take on greater responsibility for their learning
              and begin to develop a deeper sense of self and the world around
              them. Through leadership opportunities, group projects, and
              real-world learning experiences, we help them become confident
              communicators, empathetic teammates, and responsible citizens.
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
