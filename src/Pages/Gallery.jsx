import React from "react";
import grade from "../assets/grade.jpg";
import grade3 from "../assets/grade3.jpg";
import highschl from "../assets/highschl.jpg";
import highschool1 from "../assets/highschool1.jpg";

function Gallery() {
  const images = [grade, grade3, highschl, highschool1, grade3];
  return (
    <>
      <section className="w-full min-h-screen py-12 px-6 md:px-12 lg:px-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Gallery
        </h2>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;
