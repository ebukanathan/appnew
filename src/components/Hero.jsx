import React from "react";
import video from "../assets/video2.mp4";
import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      {/* <div className=" w-[100%] min-h-[50vh] relative overflow-hidden  z-100 bg-[rgba(0,0,0,0.5)] flex justify-start items-center  md:h-[80vh]">
        <div className="z-10 text-white text-3xl w-1/2 capitalize max-w-[960px] ml-6 md:text-5xl font-bold">
          Welcome to apearl premier private school{" "}
          <span>
            <p className="text-sm">...achieving excellence</p>
          </span>
        </div>

        <video
          loop
          muted
          autoPlay
          preload="auto"
          className="w-[100%] h-[100%] absolute top-0 left-0  -z-10 object-cover "
        >
          <source src={video} type="video/mp4" />
        </video>
      </div> */}

      <section className="relative w-full h-screen">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full">
          <div className="w-full md:w-2/3 lg:w-1/2 pl-8 opacity-0 animate-fadeIn md:pl-20">
            <h1 className="text-white text-4xl md:text-6xl font-bold capitalize">
              Welcome to apearl premier private school
            </h1>
            <p className="text-white text-lg md:text-xl mt-4">
              ... Achieving Excellence
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
