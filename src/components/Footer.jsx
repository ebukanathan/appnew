import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-blue-950 text-white dark:bg-gray-900">
        <div className="mx-auto w-3/4 max-w-screen-xl ">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Events
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Download
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    ccccc
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    cccc
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    cccc
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    cccc
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <a href="https://flowbite.com/"></a>. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
