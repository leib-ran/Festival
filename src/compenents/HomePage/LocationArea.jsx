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
    { name: "AFRIKA", icon: faGlobeAfrica },
    {
      name: "AMERICA",
      icon: faGlobeAmericas,
    },
    {
      name: "ASIA",
      icon: faGlobeAsia,
    },
    { name: "EUROPE", icon: faGlobeEurope },
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
