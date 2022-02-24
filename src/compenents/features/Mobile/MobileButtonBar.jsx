import { useState } from "react";
import { LocationButton } from "./components/LocationButton";

export function MobileButtonsBar(props) {
  return (
    <div>
      <div className="fixed text:4xl md:hidden flex justify-center gap-6 items-center z-50 bottom-0 h-16 bg-white w-full">
        <img
          src={`http://localhost:8000/images/logo.png`}
          alt=""
          className="bg-red-500 cursor-pointer rounded-full w-8 h-8"
          onClick={() => {
            props.setDisplay(0);
          }}
        />
        <div
          onClick={() => {
            props.setDisplay(1);
          }}
          className="w-8 h-8"
        >
          <LocationButton />
        </div>
      </div>
    </div>
  );
}
