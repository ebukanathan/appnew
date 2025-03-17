import React from "react";

function SetionHero({ title, tagline, image }) {
  return (
    <div className=" w-[100%] min-h-[50vh] relative overflow-hidden  z-100 bg-[rgba(0,0,0,0.6)] flex justify-start items-center  md:h-[80vh]">
      <div className="z-10 text-white text-5xl w-1/2 capitalize max-w-[960px] ml-6 md:text-5xl">
        {title}
        <span>
          <p className="text-sm">{tagline}</p>
        </span>
      </div>
      <img src={image} alt="" className="absolute top-0 w-full  bg-contain" />
    </div>
  );
}

export default SetionHero;
