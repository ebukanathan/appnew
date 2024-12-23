import React from "react";
import Logo from "../assets/Apearl_badge.png";

function Navbar() {
  return (
    <div className=" opacity-75 z-50 w-screen bg-gradient-to-r from-purple-50 to-blue-900 flex justify-between items-center px-6 h-14 text-gray-50">
      <a className="w-[80px] p-4">
        <img src={Logo} alt="" className="w-auto" />
      </a>

      <div className=" hidden w-1/2 md:flex  justify-evenly  text-slate-100">
        <a href="" className="">
          Home
        </a>
        <a href="" className="">
          Schools
        </a>
        <a href="" className="">
          Gallery
        </a>
        <a href="https://apearl.edves.net" className="">
          Portal
        </a>
      </div>

      <button
        className="md:hidden"
        data-collapse-toggle="navbar-default"
        type="button"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
}

export default Navbar;
