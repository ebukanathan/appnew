import React from "react";
import Buttoncall from "../components/Buttoncall";
import TwoColContainer from "../components/TwoColContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import chess from "../assets/chess.jpg";
import robotics from "../assets/robotics.jpg";
import takwendo from "../assets/takwendo.jpg";
import ballet from "../assets/ballet.jpg";
import music from "../assets/music.jpg";
import sen from "../assets/sen.jpg";
import highfronttwo from "../assets/highfronttwo.jpg";
// import highearly from "../assets/highearly.jpg";
import highgrade from "../assets/highgrade.jpg";
import NewsandEvents from "../components/NewsandEvents";
import Managers from "../components/Managers";
import { TbTargetArrow, TbBinoculars } from "react-icons/tb";
import Hero from "../components/Hero";
import { NavLink } from "react-router-dom";
import trampoline from "../assets/trampoline.jpg";
function Home() {
  const sections = [
    { name: "eyfs", image: trampoline, color: "#67AE6E" },
    { name: "primary", image: highgrade, color: "#4D55CC" },
    { name: "Junior High", image: highfronttwo, color: "#FFA955" },
  ];
  const clubs = [
    { name: "chess", photo: chess },
    { name: "robotics", photo: robotics },
    { name: "takwendo", photo: takwendo },
    { name: "ballet", photo: ballet },
    { name: "music", photo: music },
  ];
  return (
    <>
      <Hero />

      {/* Aboutus */}

      <section className="w-full py-12 px-6 md:px-12 lg:px-20 bg-gray-100 flex flex-col items-center justify-center">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Welcome to Our Platform
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Welcome to APEARL School website. I hope it offers an insightful
            preview of a school which aims to provide its pupils with an
            excellent all round experience. As we know, schools are meant to be
            citadels of learning where high moral standard, discipline and the
            fear of God are expected to be inculcated in the pupils with a
            difference. Regarding the qualities stated above, APEARL school’s
            Managers outstandingly discharge these responsibilities without
            reserve. No form of laxity is tolerated in any academic sphere
            neither are morals and diligence toyed with.
          </p>
        </div>

        <div className="w-2/3 mt-6 mx-auto  md:flex  md: gap-4">
          <div className="  shadow-lg relative w-full mx-auto my-2 rounded-full text-center bg-blue-300 p-5 md:w-[300px] h-[150px]">
            <TbBinoculars
              size={100}
              className="absolute top-[25%] left-[35%] opacity-10 "
            />
            <h3 className="text-center text-xl capitalize p-0">Our vision</h3>
            <p className="p-0">
              {" "}
              To Nurture children to the best they can be in an enabling and
              friendly environment
            </p>
          </div>
          <div className=" shadow-lg relative justify-center items-center w-full mx-auto my-2 rounded-full text-center bg-rose-300 p-5 md:w-[300px] h-[150px]">
            <TbTargetArrow
              size={100}
              className="absolute top-[25%] left-[35%] opacity-10 "
            />
            <h3 className="text-center text-xl capitalize p-0">Our Mission</h3>
            <p className="p-0">
              To Nurture children to the best they can be in an enabling and
              friendly environment
            </p>
          </div>
        </div>

        <Buttoncall>learn more </Buttoncall>
      </section>

      {/* eyfs,primary and highschool section */}
      <section className=""></section>
      <div className="  mt-8 font-bold  text-3xl w-full capitalize text-center">
        our classes
      </div>
      <div className="  mt-0  w-full h-auto mx-auto  md:mx-2 md:grid grid-cols-3  p-6 gap-3 my-6 ">
        {sections.map((item, index) => (
          <NavLink
            to={`/${item.name}`}
            key={index}
            className="rounded-lg border-none text-xl   my-2 text-center hover:opacity-75"
            style={{ backgroundColor: item.color }}
          >
            {/* <div className="bg-red-400  w-full">ghhh</div> */}
            <img src={item.image} alt="" className="rounded-sm" />
            <div className=" p-3 capitalize hover:text-white">{item.name}</div>
          </NavLink>
        ))}
      </div>
      {/* CLUBS AND EXTRACURRICULAR */}

      {/* desktop */}
      {/* <div className="w-4/5 my-5 mx-auto">
        <h2 className="text-xl capitalise text-center ">
          clubs and extra curricular
        </h2>
        <div className="hidden md:grid grid-cols-4 gap-3  w-full  mx-auto p-2 ">
          {clubs.map((item, index) => (
            <div key={index} className="bg-red-500  relative ">
              <div className=" w-full aspect-square">
                <img
                  src={item.photo}
                  alt=""
                  className="max-w-full max-h-full cover"
                />
              </div>
              <div className=" w-full p-2 text-white text-xl uppercase bg-[rgba(0,0,0,0.75)] absolute bottom-0 right-0 left-0 hover:opacity-75">
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* mobile */}
      <div className="w-full p-1 mx-auto md:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {clubs.map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative w-1/2 bg-red-500 rounded-lg"
            >
              <div className="w-full">
                <img
                  src={item.photo}
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

      <section className="w-full py-12 px-6 md:px-12 lg:px-20 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Clubs And Extra Curricullar
        </h2>

        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {clubs.map((card, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              {/* Card Image */}
              <img
                src={card.photo}
                alt={card.photo}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Transparent Overlay with Title */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4">
                <h3 className="text-white text-xl font-semibold">
                  {card.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TwoColContainer>
        {/* photo */}
        <div className="">
          <img src={sen} alt="special needs" className="w-full rounded-lg" />
        </div>
        {/* write up */}
        <div className="w-full pt-5">
          <h2 className="text-xl font-extrabold mb-3">
            Welcome to Our Special Educational Needs (SEN) Center - Empowering
            Every Child to Succeed –
          </h2>
          <p className="text-sm">
            At Apearl Premier Private School, we believe that every child
            deserves the opportunity to learn, grow, and thrive in a supportive
            and inclusive environment. Our Special Educational Needs (SEN)
            Center is dedicated to providing tailored support to students with
            diverse learning needs, ensuring they reach their full potential
            academically, socially, and emotionally.
          </p>
          <Buttoncall>learn more</Buttoncall>
        </div>
      </TwoColContainer>

      <NewsandEvents />
      <Managers />
    </>
  );
}

export default Home;
