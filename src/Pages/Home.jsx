import React from "react";
import Buttoncall from "../components/Buttoncall";
import TwoColContainer from "../components/TwoColContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import chess from "../assets/chess.jpg";
import robotics from "../assets/robotics.jpg";
import takwendo from "../assets/takwendo.jpg";
import ballet from "../assets/ballet.jpg";
// import music from "../assets/music.jpg";
import sen from "../assets/sen.jpg";
import highfront from "../assets/highfront.jpg";
import highearly from "../assets/highearly.jpg";
import highgrade from "../assets/highgrade.jpg";

function Home() {
  const sections = [
    { name: "early years", image: highearly, color: "green" },
    { name: "primary", image: highgrade, color: "purple" },
    { name: "Junior High", image: highfront, color: "orange" },
  ];
  const clubs = [
    { name: "chess", photo: chess },
    { name: "robotics", photo: robotics },
    { name: "takwendo", photo: takwendo },
    { name: "ballet", photo: ballet },
    // { name: "music", photo: music },
  ];
  return (
    <>
      <div className=" w-4/5 mx-auto md:grid grid-cols-3  gap-3 my-6">
        {sections.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border-none text-xl   my-2 text-center hover:opacity-75"
            style={{ backgroundColor: item.color }}
          >
            {/* <div className="bg-red-400  w-full">ghhh</div> */}
            <img src={item.image} alt="" className="rounded-sm" />
            <div className="p-3 capti">{item.name}</div>
          </div>
        ))}
      </div>

      {/* Aboutus */}

      <div className=" w-4/5 mx-auto  ">
        <p className=" w-full max-w-[960px] mx-auto text-sm text-center lg:w-1/2 ">
          Welcome to APEARL School website. I hope it offers an insightful
          preview of a school which aims to provide its pupils with an excellent
          all round experience. As we know, schools are meant to be citadels of
          learning where high moral standard, discipline and the fear of God are
          expected to be inculcated in the pupils with a difference. Regarding
          the qualities stated above, APEARL school’s Managers outstandingly
          discharge these responsibilities without reserve. No form of laxity is
          tolerated in any academic sphere neither are morals and diligence
          toyed with.
        </p>
        <div className="w-full mt-6 mx-auto  md:flex  gap-4">
          <div className="  w-full mx-auto my-2 rounded-full text-center bg-blue-300 p-5 md:w-[300px] h-[150px]">
            <h3 className="text-center text-xl capitalize p-0">Our vision</h3>
            <p className="p-0">
              {" "}
              To Nurture children to the best they can be in an enabling and
              friendly environment
            </p>
          </div>
          <div className="w-full mx-auto my-2 rounded-full text-center bg-rose-300 p-5 md:w-[300px] h-[150px]">
            <h3 className="text-center text-xl capitalize p-0">Our Mission</h3>
            <p className="p-0">
              {" "}
              To Nurture children to the best they can be in an enabling and
              friendly environment
            </p>
          </div>
        </div>

        <Buttoncall>learn more </Buttoncall>
      </div>
      {/* CLUBS AND EXTRACURRICULAR */}

      {/* desktop */}
      <div className="w-4/5 my-5 mx-auto">
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
      </div>

      {/* mobile */}
      <div className="w-full p-1 mx-auto md:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {clubs.map((item, index) => (
            // <div key={index} className="bg-red-500  relative ">
            //   <div className=" w-full aspect-square">
            //     <img
            //       src={item.photo}
            //       alt=""
            //       className="max-w-full max-h-full cover"
            //     />
            //   </div>
            //   <div className=" w-full p-2 text-white text-xl uppercase bg-[rgba(0,0,0,0.75)] absolute bottom-0 right-0 left-0 hover:opacity-75">
            //     <h3>{item.name}</h3>
            //   </div>
            // </div>
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

      <TwoColContainer>
        {/* photo */}
        <div className="">
          <img src={sen} alt="special needs" className="w-full rounded-lg" />
        </div>
        {/* write up */}
        <div className="w-full">
          <h2 className="text-xl font-extrabold mb-3">
            Empowering Every Child to Succeed – Welcome to Our Special
            Educational Needs (SEN) Center!
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
    </>
  );
}

export default Home;
