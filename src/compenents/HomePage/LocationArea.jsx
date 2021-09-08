import {
  faGlobeAfrica,
  faGlobeAsia,
  faGlobeEurope,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import LocationButton from "./LocationButton";

export default function LocationArea(props) {
  const ContinentsIcons = [
    { name: "AFRIKA", icon: faGlobeAfrica, center: [0, 0] },
    {
      name: "AMERICA",
      icon: faGlobeAmericas,
      center: [0, 0],
    },
    {
      name: "ASIA",
      icon: faGlobeAsia,
      center: [0, 0],
    },
    { name: "EUROPE", icon: faGlobeEurope, center: [0, 0] },
  ];

  return (
    <div>
      <div className="cursor-pointer flex justify-center flex-wrap">
        {ContinentsIcons.map((obj) => {
          return (
            <LocationButton
              icon={obj.icon}
              continent={obj.name}
            ></LocationButton>
          );
        })}
      </div>
    </div>
  );
}
