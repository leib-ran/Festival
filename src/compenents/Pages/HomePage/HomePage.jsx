import React, { useCallback } from "react";
import WelcomingTitle from "./WelcomingTitle";
import { Menu } from "./Menu";
import LocationButton from "./LocationButton";
import { MobileButtonsBar } from "../../features/Mobile/MobileButtonBar";
import { MobileHomePage } from "./MobileHomePage";

export default function HomePage(props) {
  return (
    <div>
      <div className="flex min-h-screen">
        <img
          src="http://localhost:8000/images/homePagebackground/home_page_image.jpg"
          className="inset-0 hidden md:block relative min-h-screen w-full  z-0 "
        />
        <img
          src="http://localhost:8000/images/homePagebackground/home_page_image486X681.jpg"
          className="inset-0  md:hidden relative min-h-screen w-full  z-0 "
        />
        <div className="absolute w-full h-full top-1/6 left-1/5 md:p-2">
          <div className="absolute w-full h-full bg-red-500 mb-2 mt-2 opacity-10"></div>
          <div className="h-full hidden md:block">
            <div className="text-white md:flex-col lg:flex-row h-full flex justify-center xl:justify-between">
              <WelcomingTitle />
              <Menu />
            </div>
            <LocationButton />
          </div>
          <div className="md:hidden">
            <MobileHomePage />
          </div>
        </div>
      </div>
    </div>
  );
}
