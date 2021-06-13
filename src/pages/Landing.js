import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Computer from "../assets/img/computer.svg";
import Logo from "../assets/img/logo.png";
import AddApointement from "../components/Appointement";
import AddStages from "../components/Stages";
import AddVisit from "../components/Visit";
const Landing = () => {
  const [showStage, setShowStages] = useState(false);
  const [showVisit, setShowVisit] = useState(false);
  const [showAppointment, setShowAppointement] = useState(false);

  return (
    <div>
     
      <main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
        <header class="h-24 sm:h-32 flex items-center z-30 w-full">
          <div class="container mx-auto px-6 flex items-center justify-between">
            <img src={Logo} className="h-36 w-36" />
            <div class="uppercase text-gray-800 dark:text-white font-black text-3xl"></div>
            <div class="flex items-center">
              <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                <button class="py-2 px-6 flex" onClick={() => {
                    setShowAppointement(true);
                  }}>Rendez vous</button>
                <button
                  href="#"
                  class="py-2 px-6 flex"
                  onClick={() => {
                    setShowStages(true);
                  }}
                >
                  Stages
                </button>
                <button
                  onClick={() => {
                    setShowVisit(true);
                  }}
                  class="py-2 px-6 flex"
                >
                  Visites
                </button>
                <a href="#" class="py-2 px-6 flex">
                  Contact
                </a>
                <Link to="/login" class="py-2 px-6 flex border">
                  Espace Extranet
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <AddStages
        show={showStage}
        close={() => {
          setShowStages(false);
        }}
      />
      <AddApointement
        show={showAppointment}
        close={() => {
          setShowAppointement(false);
        }}
      />
      <AddVisit
        show={showVisit}
        close={() => {
          setShowVisit(false);
        }}
      />
              <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
              <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Be on
                <span class="text-5xl sm:text-7xl">Time</span>
              </h1>
              <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                Dimension of reality that makes change possible and
                understandable. An indefinite and homogeneous environment in
                which natural events and human existence take place.
              </p>
              <div class="flex mt-8">
                <a
                  href="#"
                  class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                >
                  Get started
                </a>
                <a
                  href="#"
                  class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </a>
              </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img src={Computer} style={{ height: "80%", width: "80%" }} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
