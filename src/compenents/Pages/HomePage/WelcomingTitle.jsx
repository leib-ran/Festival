import React, { useEffect, useState } from "react";
import HomePageMap from "./HomePageMap";
import LocationArea from "./LocationArea";

export default function WelcomingTitle() {
  const [index, setIndex] = useState(-1);
  const [show, setShow] = useState("100");
  const [showCategoryArea, setShowCategoryArea] = useState("0");

  setTimeout(() => {
    setIndex(0);
    setShow("0");
    setShowCategoryArea("100");
  }, 3000);

  return (
    <div className="lg:w-5/12 md:w-8/12 sm:m-auto  md:m-0 sm:w-full overflow-hidden">
      <div
        className={`transition-all relative duration-1000 ease-in-out "`}
        style={{
          transform: `translateY(${index * 100}%)`,
        }}
      >
        <div className="relative">
          <div className="absolute w-full h-full bg-gray-900 opacity-60"></div>
          <div className="text-4xl  text-center relative p-2">
            CHOOSE FESTIVAL
            <div className="  overflow-hidden  h-full  m-auto   filter  brightness-75 md:rounded-full	 contrast-200	lg:rounded-full sm:rounded-none	 -hue-rotate-180 invert	saturate-200	opacity-90">
              <HomePageMap />
            </div>
            <div
              className={`opacity-${showCategoryArea} transition delay-1000 duration-4000 ease-in-out`}
            >
              <LocationArea />
            </div>
          </div>
        </div>
        <div className="h-4">
          <div
            className={`opacity-${show} transition duration-500 ease-in-out`}
          >
            <h1 className="text-8xl font-bold text-white">WELCOME</h1>
            <h1 className="text-4xl">OUR JOURNEY BEGINS HERE</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
