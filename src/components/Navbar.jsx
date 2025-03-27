import React, { useState } from "react";
import Logo from "../assets/Apearl_badge.png";
import { MdClose, MdOutlineAdd } from "react-icons/md";
import { FaBars, FaMinus } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
NavLink;

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showSub, setShowSub] = useState(true);

  const [menu, setMenu] = useState([
    { name: "home", submenu: [], id: 1, show: false },
    {
      name: "school",
      submenu: ["eyfs", "primary", "High School"],
      id: 2,
      show: false,
    },
    { name: "gallery", submenu: [], id: 3, show: false },
    { name: "portal", submenu: ["staff", "pupils"], id: 4, show: false },
  ]);

  const handleSubmenu = (id) => {
    const newSub = menu.map((item) =>
      item.id === id ? { ...item, show: !item.show } : item
    );
    setMenu(newSub);

    console.log(menu);
  };

  // declare dropdown arrow for mobile view
  const dropdown = showSub ? <MdOutlineAdd size={20} /> : <FaMinus size={20} />;

  return (
    <>
      <div className=" sticky top-0 opacity-75 z-50 w-screen bg-gradient-to-r from-purple-50 to-blue-900 flex justify-between items-center px-6 h-14 text-gray-50">
        <a className="w-[80px] p-4">
          <img src={Logo} alt="" className="w-auto" />
        </a>

        <div className=" hidden w-1/2 md:flex  justify-evenly  text-slate-100">
          {menu.map((menu, index) => (
            <NavLink
              to={menu.submenu.length > 0 ? "#" : `/${menu.name}`}
              key={index}
              className="flex items-center justify-center capitalize relative "
              onClick={() => handleSubmenu(menu.id)}
              onMouseEnter={() => handleSubmenu(menu.id)}
              onMouseLeave={() => handleSubmenu(menu.id)}
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

              {menu.show && menu.submenu.length > 0 && (
                <div className=" flex flex-col w-[150px] absolute top-8 bg-slate-600 text-red-600 px-2 py-3 rounded-md">
                  {menu.submenu.map((item, index) => (
                    <NavLink to={`/${item}`} key={index} className="">
                      {item}
                    </NavLink>
                  ))}
                </div>
              )}
            </NavLink>
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
                  onClick={() => handleSubmenu(menu.id)}
                >
                  <a href="">{menu.name}</a>
                  {menu.submenu.length > 1 ? (
                    menu.show ? (
                      <FaMinus size={20} />
                    ) : (
                      <MdOutlineAdd size={20} />
                    )
                  ) : (
                    ""
                  )}
                </div>
                {menu.show &&
                  menu.submenu.length > 0 &&
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
