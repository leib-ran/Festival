import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "../logo/Logo";

export default function BottomPage() {
  return (
    <div className="bg-red-900 opacity-80 text-white w-full h-24 static bottom-0">
      <div className="flex items-center justify-center">
        <div className="mr-5">
          <Logo></Logo>
        </div>
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-blue-500"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="text-blue-500"
          icon={faTwitter}
        ></FontAwesomeIcon>
        <p>All rights reserved to Holy mally &copy;</p>
      </div>
    </div>
  );
}
