import React, { useState } from "react";
import Logo from "../assets/Apearl_badge.png";
import { MdClose, MdOutlineAdd } from "react-icons/md";
import { FaBars, FaMinus } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [showSub, setShowSub] = useState(true);

  const menu = [
    { name: "home", submenu: [], id: 1 },
    {
      name: "school",
      submenu: ["early years", "primary", "junior High School"],
      id: 2,
    },
    { name: "gallery", submenu: [], id: 3 },
    { name: "portal", submenu: ["staff", "pupils"], id: 4 },
  ];

  const dropdown = showSub ? <FaMinus size={20} /> : <MdOutlineAdd size={20} />;

  const handleDrop = (id) => {
    if (menu.id == id) {
      setShowSub(!showSub);
    }
  };

  return (
    <>
      <div className=" sticky top-0 opacity-75 z-50 w-screen bg-gradient-to-r from-purple-50 to-blue-900 flex justify-between items-center px-6 h-14 text-gray-50">
        <a className="w-[80px] p-4">
          <img src={Logo} alt="" className="w-auto" />
        </a>

        <div
          onClick={() => setShowNav(!showNav)}
          className=" hidden w-1/2 md:flex  justify-evenly  text-slate-100"
        >
          {menu.map((menu, index) => (
            <div
              key={index}
              className="flex items-center justify-center capitalize "
            >
              {menu.name}
              {menu.submenu.length > 1 ? (
                <RiArrowDropDownLine
                  size={30}
                  className="hover:rotate-180 ease-in-out duration-300"
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowNav(!showNav)}
          className="md:hidden"
          data-collapse-toggle="navbar-default"
          type="button"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          {showNav ? <MdClose size={25} /> : <FaBars size={25} />}
        </button>
      </div>
      <div className="relatve md:hidden">
        {showNav && (
          <div className="  flex flex-col absolute items-center justify-center  w-2/3 bg-[rgba(240,244,246,0.75)]  z-50">
            {menu.map((menu, index) => (
              <div key={index} className="w-full">
                <div
                  className="w-full mx-auto flex items-center justify-between text-left capitalize p-4"
                  onClick={handleDrop(menu.id)}
                >
                  <a href="">{menu.name}</a>
                  {menu.submenu.length > 1 ? dropdown : ""}
                </div>
                {showSub &&
                  menu.submenu.map((item, index) => (
                    <h3
                      key={index}
                      className=" ml-10 pb-1 mb-4 border-b-2 border-b-black capitalize"
                    >
                      {item}
                    </h3>
                  ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
