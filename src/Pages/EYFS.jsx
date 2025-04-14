import React from "react";
import SectionHero from "../components/SectionHero";
import mont from "../assets/mont.jpg";
import eyfs3 from "../assets/eyfs3.jpg";
import eyfs from "../assets/eyfs.jpg";
import eyfspe from "../assets/eyfspe.jpg";
import eyfspath from "../assets/eyfspath.jpg";

function EYFS() {
  const qualities = [
    {
      title: "Active Exploration ",
      description: "A secure and nurturing space for children to learn.",
    },
    {
      title: "Creative Expression ",
      description: "Encouraging development through structured and free play.",
    },
    {
      title: "Social Interaction ",
      description:
        "Supporting all children, regardless of background or ability.",
    },
    {
      title: "Structured & Free Play ",
      description: "Experienced educators fostering growth and curiosity.",
    },
    {
      title: "Personalized Support ",
      description:
        "Engaging families in their child's early education journey.",
    },
  ];

  const subjects = [
    {
      title: "Personal, Social & Emotional Development  ",
      description: "A secure and nurturing space for children to learn.",
    },
    {
      title: "Communication & Language ",
      description: "Encouraging development through structured and free play.",
    },
    {
      title: "Physical Development ",
      description:
        "Supporting all children, regardless of background or ability.",
    },
    {
      title: "Literacy",
      description: "Experienced educators fostering growth and curiosity.",
    },
    {
      title: "Mathematics",
      description:
        "Engaging families in their child's early education journey.",
    },
    {
      title: "Understanding the World ",
      description:
        "Engaging families in their child's early education journey.",
    },
    {
      title: "Expressive Arts & Design",
      description:
        "Engaging families in their child's early education journey.",
    },
  ];
  return (
    <>
      <SectionHero
        title="EYFS"
        tagline="At Apearl, we are committed to nurturing young minds in a safe, child-centred learning environment where every child feels valued, inspired, and empowered. Our approach to early education goes beyond academics, fostering confidence, independence, and a lifelong love for learning."
        image={eyfs}
      />

      <section className="w-full py-12 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Column - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={mont}
              alt="Placeholder"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Curriculum
            </h2> */}
            <p className="mt-4 text-gray-600 text-lg">
              We believe that every child is unique, and our mission is to
              provide a stimulating, inclusive, and supportive setting where
              they can explore, create, and grow at their own pace. Through
              engaging experiences, we help children build strong foundations
              for future success, both academically and emotionally.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full mb-0 pt-12 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Left Column - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={eyfspe}
              alt="Placeholder"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-lg md:text-lg  text-gray-800">
              Our teaching philosophy blends the best of play-based,
              Montessori-inspired, and hands-on learning approaches, ensuring
              children actively engage in their own learning journey.
            </h4>
            <h4 className="text-lg font-bold pt-4 text-left">We Focus on:</h4>
            <ul className="flex flex-wrap gap-2 p-4 ">
              {qualities.map((quality, index) => (
                <li key={index} className="p-4  bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibo">{quality.title}</h3>
                  {/* <p className="text-gray-700">{quality.description}</p> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full mt-0 py-12 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-lg font-bold py-4 text-left">
              Holistic Areas of Development
            </h4>
            <p className="">
              The EYFS framework focuses on seven essential areas of
              development, carefully designed to help children flourish in all
              aspects of life:
            </p>
            <ul className="flex flex-wrap gap-2 p-4 ">
              {subjects.map((subject, index) => (
                <li key={index} className="p-4  bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibo">{subject.title}</h3>
                  {/* <p className="text-gray-700">{subject.description}</p> */}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={eyfspath}
              alt="Placeholder"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* <section className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          EYFS Qualities
        </h2>
        <ul className="space-y-3">
          {qualities.map((quality, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-blue-600">
                {quality.title}
              </h3>
              <p className="text-gray-700">{quality.description}</p>
            </li>
          ))}
        </ul>
      </section> */}
    </>
  );
}

export default EYFS;
