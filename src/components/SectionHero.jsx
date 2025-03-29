import React from "react";

function SetionHero({ title, tagline, image }) {
  return (
    <>
      <section
        className="relative w-full h-[70vh] bg-cover bg-center md:h-screen"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full">
          <div className="w-full md:w-2/3 lg:w-1/2 pl-8  opacity-0 animate-fadeIn md:pl-20">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              {title}
            </h1>
            <p className="w-2/3 text-white text-lg md:text-xl mt-4">
              {tagline}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SetionHero;
