import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-blue-950 text-white">
        <div className="mx-auto w-3/4 max-w-screen-xl ">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Company
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <NavLink to="/eyfs" className="hover:underline">
                    EYFS
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="/primary" className="hover:underline">
                    Primary
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink to="/high school" className="hover:underline">
                    High School
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Social Media
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/Apearlschoolskubwa/"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Youtube
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/apearlschoolskubwa2"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                {/* <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li> */}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Get In Touch
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Address: Plot 25 Christmas Street (Beside Kings Care
                    Hospital) Phase IV Kubwa
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    {" "}
                    +234(0)9062888495
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    +234(0)9093235664
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    +234(0)9136332296,
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    email:info@apearlschools.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 md:flex  md:items-center md:justify-center">
            <span className="text-sm text-center text-gray-500 dark:text-gray-300 sm:text-center">
              Copyright © {new Date().getFullYear()}{" "}
              <a href="https://flowbite.com/"></a>. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
