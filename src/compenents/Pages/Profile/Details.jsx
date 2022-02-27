import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import { faHome, faScroll } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ButtonProfileBar } from "../../features/UserProfileBar/ButtonProfileBar";
import buttonsBarStorage from "../../features/UserProfileBar/buttons";
export function UserDetailsLeft() {
  const user = useSelector((state) => state.userGlobalState);
  return (
    <div>
      <div className="w-16 bg-gray-900 h-96  shadow-2xl text-white">
        {buttonsBarStorage.map((elemnet, index) => (
          <div
            key={index}
            className="h-8 flex content-center hover:text-yellow-300 mb-4 flex-col justify-center text-center cursor-pointer"
          >
            <ButtonProfileBar details={elemnet} />
          </div>
        ))}
      </div>
    </div>
  );
}
