import React from "react";

function SetionHero({ title, tagline, image }) {
  return (
    <div className=" w-[100%] min-h-[40vh] relative overflow-hidden  z-100 bg-[rgba(0,0,0,0.9)] flex justify-start items-end  md:h-[80vh]">
      <div className="z-10 text-white text-5xl w-1/2 capitalize max-w-[960px] ml-6 md:text-5xl font-bold">
        {title}
        <span>
          <p className="text-sm font-medium">{tagline}</p>
        </span>
      </div>
      <img
        src={image}
        alt=""
        className="absolute top-0 w-full  bg-contain bg-center"
      />
    </div>
  );
}

export default SetionHero;
