import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "../Logo/Logo";

export default function BottomPage() {
  return (
    <div className="bg-gray-900 absolute t-0 b-0 l-0 r-0 text-white w-full h-24 static bottom-0">
      <div className="flex items-center justify-center">
        <div className="mr-5">
          <Logo></Logo>
        </div>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-3xl text-black"
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-blue-500 text-3xl			"
          ></FontAwesomeIcon>
        </a>
        <a href="https://twitter.com/">
          <FontAwesomeIcon
            className="text-blue-500 text-3xl"
            icon={faTwitter}
          ></FontAwesomeIcon>
        </a>
        <p>All rights reserved to Holy mally &copy;</p>
      </div>
    </div>
  );
}
