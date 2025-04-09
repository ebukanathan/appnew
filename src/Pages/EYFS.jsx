import React from "react";
import SectionHero from "../components/SectionHero";
import mont from "../assets/mont.jpg";
import eyfs3 from "../assets/eyfs3.jpg";
import eyfs from "../assets/eyfs.jpg";
import eyfspe from "../assets/eyfspe.jpg";

function EYFS() {
  const qualities = [
    {
      title: "Safe Environment",
      description: "A secure and nurturing space for children to learn.",
    },
    {
      title: "Play-Based Learning",
      description: "Encouraging development through structured and free play.",
    },
    {
      title: "Inclusive Approach",
      description:
        "Supporting all children, regardless of background or ability.",
    },
    {
      title: "Qualified Staff",
      description: "Experienced educators fostering growth and curiosity.",
    },
    {
      title: "Parental Involvement",
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Curriculum
            </h2>
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
      <section className="w-full py-12 px-6 md:px-12 lg:px-20">
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
            <h4 className="text-lg md:text-xl  text-gray-800">
              The EYFS framework focuses on seven essential areas of
              development, carefully designed to help children flourish in all
              aspects of life:
            </h4>
            <ul className="space-y-3">
              {qualities.map((quality, index) => (
                <li
                  key={index}
                  className="grid grid-cols-2 p-4  bg-white rounded-lg shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-blue-600">
                    {quality.title}
                  </h3>
                  {/* <p className="text-gray-700">{quality.description}</p> */}
                </li>
              ))}
            </ul>
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
