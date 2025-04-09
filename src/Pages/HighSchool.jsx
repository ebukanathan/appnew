import React from "react";
import SectionHero from "../components/SectionHero";
import highschl from "../assets/highschl.jpg";
import highschool1 from "../assets/highschool1.jpg";
import grade3 from "../assets/grade3.jpg";
import highschoolclass from "../assets/highschoolclass.jpg";
function HighSchool() {
  return (
    <div className="">
      <SectionHero
        title="High school"
        tagline="Our Junior High School nurtures young minds with a dynamic curriculum, innovative learning experiences, and a supportive environment. Join us in shaping bright futures—one student at a time."
        image={highschool1}
      />

      <div className="flex flex-col w-full  items-center justify-center ">
        <div className="flex flex-col p-4 md:flex-row gap-8">
          <div className="fle flex-col  w-full md:w-1/2 p-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Curriculum
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              We run a blend of Nigerian and British curriculum. Requisite
              skills for critical thinking, presentations, research,
              problem-solving, financial literacy, digital literacy, effective
              communication, collaboration, creativity and team spirit were
              factored into the curriculum development. Additionally, our
              programmes promote hands-on activities in diverse areas including
              literary creativity, artwork, technical projects and digitization;
              fostering skills development and self-reliance.
            </p>
            {/* <p className="mt-4 text-gray-600 text-lg">
              Notwithstanding the high school started September last year, the
              school is already accredited by the National Examinations Council
              (NECO) for Basic Education Certificate Examinations (BECE). No
              doubt, this attests to our commitment in giving students a
              holistic education that offers academic excellence and sound
              character in a dynamic and conducive learning environment.
            </p> */}

            {/* <p className="font-normal mb-5 text-justify">
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
                        </p> */}
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={highschoolclass}
              alt=""
              className="w-full h-full bg-cover"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse p-4 md:flex-row-reverse gap-8">
          <div className="fle flex-col  w-full md:w-1/2 p-4">
            <p className=" mt-4 text-gray-600 text-lg">
              Our learning environment is equipped with state-of-the-art
              facilities, including our cutting-edge e-library, internet enabled
              ICT room, and a well-equipped multipurpose science laboratory. Our
              Home Economics kitchen is an additional space that enhances
              practical learning and life skills development.
            </p>{" "}
            <p className="mt-4 text-gray-600 text-lg">
              We understand the importance of safety and security, which is why
              we prioritize a secure campus, ensuring peace of mind for our
              students, parents, and staff. We have constant power and water
              supply; our air-conditioned classrooms create a comfortable
              atmosphere that fosters concentration and learning excellence.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={highschl} alt="" className="w-full h-full bg-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighSchool;
