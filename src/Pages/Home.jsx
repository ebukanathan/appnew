import React from "react";
import Buttoncall from "../components/Buttoncall";
import chess from "../assets/chess.jpg";
import robotics from "../assets/robotics.jpg";
import takwendo from "../assets/takwendo.jpg";

function Home() {
  const sections = ["early years", "primary", "Junior High"];
  const clubs = [
    { name: "chess", photo: chess },
    { name: "robotics", photo: robotics },
    { name: "takwendo", photo: takwendo },
  ];
  return (
    <>
      <div className=" w-4/5 mx-auto md:grid grid-cols-3  gap-3 my-6">
        {sections.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border-none text-xl p-10 bg-yellow-500 my-2 text-center hover:opacity-75"
          >
            <img src="" alt="" />
            {item}
          </div>
        ))}
        {/* <div className="rounded-lg border-none text-xl p-10 bg-yellow-500 my-2 text-center">
        Primary School
      </div>
      <div className="rounded-lg border-none text-xl p-10 bg-yellow-500 my-2 text-center">
        Junior High School
      </div> */}
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
    </>
  );
}

export default Home;
