import React, { useEffect, useState } from "react";
import HomePageMap from "../../features/Maps/HomePageMap";
import LocationArea from "../../features/Maps/components/LocationArea";

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
    <div className="xl:w-5/12 lg:8/12 md:w-full  sm:m-auto  md:m-0 sm:w-full overflow-hidden">
      <div
        className={`transition-all relative duration-1000 ease-in-out "`}
        style={{
          transform: `translateY(${index * 100}%)`,
        }}
      >
        <div className="relative hidden md:block">
          <div className="absolute w-full h-full bg-gray-900 opacity-60"></div>
          <div className="text-4xl  text-center relative p-2">
            CHOOSE FESTIVAL
            <div className="overflow-hidden grow hidden md:block  h-full  m-auto   filter  brightness-75 md:rounded-full	 contrast-200	lg:rounded-full sm:rounded-none	 -hue-rotate-180 invert	saturate-200	opacity-90">
              <HomePageMap />
            </div>
            <div
              className={`opacity-${showCategoryArea} transition hidden md:block delay-1000 duration-4000 ease-in-out`}
            >
              <LocationArea />
            </div>
          </div>
        </div>
        <div className="h-4">
          <div
            className={`opacity-${show} transition duration-500 ease-in-out`}
          >
            <h1 className="hidden lg:block text-8xl font-bold text-white">
              WELCOME
            </h1>
            <h1 className="hidden lg:block text-4xl">
              OUR JOURNEY BEGINS HERE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
