import React from "react";
import video from "../assets/video2.mp4";
import Navbar from "./Navbar";

function Hero() {
  {
    /* <div className=" w-1/2  mx-auto py-9">
        <h1 className="text-4xl  opacity-45  capitalize ">
          apearl premier private school
        </h1>{" "}
      </div> */
  }
  return (
    <div className=" w-[100%] min-h-[50vh] relative overflow-hidden  z-100 bg-[rgba(0,0,0,0.6)] flex justify-start items-center  md:h-[80vh]">
      <div className="z-10 text-white text-3xl w-1/2 capitalize max-w-[960px] ml-6 md:text-5xl">
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
    </div>
  );
}

export default Hero;
