import React, { useCallback } from "react";
import WelcomingTitle from "./WelcomingTitle";
import { Menu } from "./Menu";

export default function HomePage(props) {
  return (
    <div>
      <div className="relative h-screen  z-1 flex">
        <img
          src="/images/homePagebackground/home_page_image.jpg"
          className="inset-0 absolute w-full h-screen z-0 "
        />
        <div className="absolute w-full top-1/6 left-1/5 p-2">
          <div className="absolute w-full bg-red-500 mb-2 mt-2 opacity-10"></div>
          <div className="">
            <div className="text-white flex justify-between">
              <WelcomingTitle />
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
