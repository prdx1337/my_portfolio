import React from "react";
import splashy from "../assets/splashy.png";
import imxt from "../assets/imxt.png";
import tea from "../assets/tea.png";
import { FaGithub } from "react-icons/fa";
import { BiRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";

function Projects({ textEnter, textLeave }) {
  return (
    <div className="max-w-screen-lg mx-auto py-8 my-8 font-poppins">
      <div className="dark:text-white text-4xl font-bold text-black pb-4 text-center flex items-center justify-center">
        <motion.h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="hover:cursor-none"
        >
          {"<"}Projects{"/>"}
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center p-4 mx-auto">
        <div className="bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-indigo-900 border-2 dark:border-none">
          <img
            src={splashy}
            alt=""
            className="object-fit w-full h-3/5 object-center py-4 px-6  duration-200 ease-linear"
          />
          <div className="dark:text-white text-gray-700 w-4/5 mx-auto ">
            <div className="flex flex-wrap text-white gap-2">
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                REACT
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                TAILWINDCSS
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                AXIOS
              </span>
            </div>
            <h3 className="text-center text-xl py-4 font-bold">splashy.</h3>
            <p className="text-left text-md whitespace-normal h-24 overflow-auto">
              This project uses the Unsplash API to create an image search web
              app. Helped me understand how http requests, data retrieval, and
              showing them in the browser.
            </p>
            <br />
            <div className="flex justify-between py-4">
              <div
                onClick={() =>
                  window.open("https://splashy-alpha.vercel.app/", "_blank")
                }
                className="cursor-pointer inline-flex items-center py-2 px-4 text-md font-medium text-center bg-[#0A1929] text-white hover:text-[#64FFDA] rounded-2xl hover:scale-105 hover:rounded-none duration-200 ease-in-out"
              >
                LIVE
                <BiRightArrow className="ml-2" />
              </div>

              <FaGithub
                className="w-10 h-10 cursor-pointer hover:text-[#64FFDA] duration-200 ease-in-out"
                onClick={() =>
                  window.open("https://github.com/muhay007/splashy", "_blank")
                }
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-indigo-900 border-2 dark:border-none">
          <img
            src={imxt}
            alt=""
            className="object-fit w-full h-3/5 object-center py-4 px-6  duration-200 ease-linear"
          />
          <div className=" dark:text-white text-gray-700 w-4/5 mx-auto ">
            <div className="flex flex-wrap text-white gap-2">
              <span className="bg-[#0A1929]  hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                REACT
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                TAILWINDCSS
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                TESSERACT
              </span>
            </div>
            <h3 className="text-center text-xl py-4 font-bold">imxt_</h3>
            <p className="text-left text-md whitespace-normal h-24 overflow-auto">
              OCR online application that can text-to-image conversion. I
              produced this project since occasionally I wanted to run a
              particular code that I YT video was watched, but there was no
              repository, so I just screenshot it. rather than typing it,
              convert it and copy it.
            </p>
            <br />
            <div className="flex justify-between py-4">
              <div
                onClick={() =>
                  window.open("https://imxt.vercel.app/", "_blank")
                }
                className="cursor-pointer inline-flex items-center py-2 px-4 text-md font-medium text-center bg-[#0A1929] text-white hover:text-[#64FFDA] rounded-2xl hover:scale-105 hover:rounded-none duration-200 ease-in-out"
              >
                LIVE
                <BiRightArrow className="ml-2" />
              </div>

              <FaGithub
                className="w-10 h-10 cursor-pointer hover:text-[#64FFDA] duration-200 ease-in-out"
                onClick={() =>
                  window.open("https://github.com/muhay007/imxt", "_blank")
                }
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-indigo-900 border-2 dark:border-none">
          <img
            src={tea}
            alt=""
            className="object-fit w-full h-3/5 object-center py-4 px-6  duration-200 ease-linear"
          />
          <div className=" dark:text-white text-gray-700 w-4/5 mx-auto ">
            <div className="flex flex-wrap text-white gap-2">
              <span className="bg-[#0A1929]  hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                PHP
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                MYSQL
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                BOOTSTRAP
              </span>
            </div>
            <h3 className="text-center text-xl py-4 font-bold">_</h3>
            <p className="text-left text-md whitespace-normal h-24 overflow-auto">
              Development of Supply Chain with Stock Monitoring for TEA101
              (Capstone)
            </p>
            <br />
            <div className="flex justify-between py-4">
              <div
                // onClick={() => window.open("", "_blank")}
                className="line-through cursor-pointer inline-flex items-center py-2 px-4 text-md font-medium text-center bg-[#0A1929] text-white hover:text-[#64FFDA] rounded-2xl hover:scale-105 hover:rounded-none duration-200 ease-in-out"
              >
                LIVE
                <BiRightArrow className="ml-2" />
              </div>

              <FaGithub
                className="line-through w-10 h-10 cursor-pointer hover:text-[#64FFDA] duration-200 ease-in-out"
                // onClick={() => window.open("", "_blank")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
