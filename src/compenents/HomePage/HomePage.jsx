import React, { useCallback } from "react";
import WelcomingTitle from "./WelcomingTitle";
import { Menu } from "./Menu";

export default function HomePage(props) {
  return (
    <div>
      <div className="flex min-h-screen">
        <img
          src="/images/homePagebackground/home_page_image.jpg"
          className="inset-0 relative min-h-screen w-full  z-0 "
        />
        <div className="absolute w-full h-full top-1/6 left-1/5 p-2">
          <div className="absolute w-full h-full bg-red-500 mb-2 mt-2 opacity-10"></div>
          <div className="h-full">
            <div className="text-white flex-wrap h-full flex justify-center xl:justify-between">
              <WelcomingTitle />
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
