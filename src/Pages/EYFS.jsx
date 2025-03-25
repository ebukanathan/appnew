import React from "react";
import SectionHero from "../components/SectionHero";
import mont from "../assets/mont.jpg";
import eyfs3 from "../assets/eyfs3.jpg";

function EYFS() {
  return (
    <>
      <SectionHero title="EYFS" tagline="catch them young" image={mont} />
      <div className="flex flex-col w-full  items-center justify-center ">
        <div className="flex flex-col p-4 md:flex-row gap-8">
          <div className="fle flex-col  w-full md:w-1/2 p-4">
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
            <img src={eyfs3} alt="" className="w-full h-full bg-cover" />
          </div>
        </div>

        <div className="flex flex-col-reverse p-4 md:flex-row-reverse gap-8">
          <div className="fle flex-col  w-full md:w-1/2 p-4">
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
          <div className="w-full md:w-1/2">
            <img src={mont} alt="" className="w-full h-full bg-cover" />
          </div>
        </div>
      </div>
    </>
  );
}

export default EYFS;
