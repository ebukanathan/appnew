import React from "react";

function CardType1({ image, title, desc }) {
  return (
    <>
      <div className="flex flex-col w-[420px] mx-auto my-7 bg-neutral-50 rounded-lg md:w-[300px]">
        <div className="w-[420px]  md:w-[300px]">
          <img src={image} alt="" className="w-full  rounded-t-lg" />
        </div>
        <div className="flex flex-col px-3">
          <div className=" w-full my-2 text-xl capitalize">{title}</div>
          {/* <p className="text-sm">date</p> */}
          <p className="">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default CardType1;
