import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";

export default function MenuBar({ isDarkMode, setIsDarkMode }) {
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode); // Toggle dark mode state in Home.jsx
    document.documentElement.classList.toggle("dark"); //
  };
  return (
    <div className=" dark:border-b-gray-500 dark:bg-gray-900 p-[20px]  flex justify-between items-center px-[30px] px-[40px] md:px-[100px] border-b border-b-gray-300 ">
      <Link to="/">
        <div className="flex items-center ">
          {/* <img className="w-[80px]" src={Logo} alt="Logo" /> */}

          <svg
            className="w-[30px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill={isDarkMode ? "#CFC8FF" : "#3D365C"}
              d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z"
            />
          </svg>
          <p className="text-md lg:text-xl text-[#210F37] font-bold pl-[10px] lg:pl-[20px] dark:text-white">
            World Explorer
          </p>
        </div>
      </Link>
      <div className="flex items-center">
        <button onClick={toggleDarkMode}>
          <div className="flex py-[6px] px-[8px] bg-gray-200 border border-black-200 rounded-md cursor-pointer group hover:bg-gray-400 duration-200">
            <svg
              className="w-[16px] fill-[#2e2e2e]  -rotate-[24deg] "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="#3D365C"
                d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0l-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"
              />
            </svg>
          </div>
        </button>
        <p className="hidden sm:block lg:text-lg font-semibold text-[#210F37] pl-[16px] dark:text-white">
          {isDarkMode ? "Light" : "Dark"} Mode
        </p>
      </div>
    </div>
  );
}
