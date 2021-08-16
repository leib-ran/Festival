import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";

export default function BottomPage() {
  return (
    <div className="bg-green-100 w-full h-24 static bottom-0">
      <div className="flex items-center justify-center">
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-blue-500"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="text-blue-500"
          icon={faTwitter}
        ></FontAwesomeIcon>
        <p>All rights reserved to Holly mally &copy;</p>
      </div>
      <Logo></Logo>
    </div>
  );
}
