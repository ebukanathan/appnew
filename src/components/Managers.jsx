import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import gladys from "../assets/Gladys.jpeg";
import director from "../assets/director.jpg";
import atiga from "../assets/Atiga.jpeg";
import consultant from "../assets/consultant.jpg";

function Managers() {
  const managers = [
    { name: "Oluchi Okoro", image: director, title: "Direcctor", desc: "" },
    { name: "Atiga Samuel", image: atiga, title: "Head teacher", desc: "" },
    { name: "Ebere Okafor", image: consultant, title: "Consultant", desc: "" },
    {
      name: "Gladys Olasanonye",
      image: gladys,
      title: "Administrator",
      desc: "",
    },
  ];
  return (
    <>
      <div className="text-2xl font-semibold capitalize mx-auto max-w-2/3 mb-5 md:text-5xl">
        <div className="text-center">Meet our Team</div>
      </div>
      <div className=" hidden md:block w-2/3 p-1 mx-auto  ">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {managers.map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative w-full bg-red-500 rounded-lg"
            >
              <div className="w-full">
                <img
                  src={item.image}
                  alt=""
                  className="max-w-full max-h-full cover rounded-lg"
                />
              </div>
              <div className="opacity-0 w-full p-2 text-white text-xl uppercase bg-[rgba(0,0,0,0.75)] absolute bottom-0 right-0 left-0 hover:opacity-75 transition-all duration-500 ease-in-out">
                <h3 className="capitalize">{item.name}</h3>
                <p className="capitalize text-sm">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* mobile */}
      <div className="w-full p-1 mx-auto md:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={2.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {managers.map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative w-[250px] bg-red-500 rounded-lg"
            >
              <div className="w-full">
                <img
                  src={item.image}
                  alt=""
                  className="max-w-full max-h-full cover rounded-lg"
                />
              </div>
              <div className="w-full p-2 text-white text-xl uppercase bg-[rgba(0,0,0,0.75)] absolute bottom-0 right-0 left-0 hover:opacity-75">
                <h3 className="capitalize">{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Managers;
