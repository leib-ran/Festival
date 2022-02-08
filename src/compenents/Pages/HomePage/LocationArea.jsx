import {
  faGlobeAfrica,
  faGlobeAsia,
  faGlobeEurope,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";

import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import LocationButton from "./LocationButton";

export default function LocationArea(props) {
  const map = useSelector((state) => state.mapUpdate);

  const onClick = useCallback(
    (center, zoom) => {
      map.setView(center, zoom);
    },
    [map]
  );

  const ContinentsIcons = [
    {
      name: "AFRICA",
      icon: faGlobeAfrica,
      center: [2.68, 23.2],
      zoom: 3,
    },
    {
      name: "AMERICA",
      icon: faGlobeAmericas,
      center: [0, -100],
      zoom: 2,
    },
    {
      name: "ASIA",
      icon: faGlobeAsia,
      center: [56.61, 95.63],
      zoom: 2,
    },
    { name: "EUROPE", icon: faGlobeEurope, center: [52, 18.9], zoom: 3 },
  ];

  return (
    <div>
      {map && (
        <div className="cursor-pointer flex justify-center flex-wrap">
          {ContinentsIcons.map((obj) => {
            return (
              <div key={obj.name} onClick={() => onClick(obj.center, obj.zoom)}>
                <LocationButton
                  key={obj.name}
                  icon={obj.icon}
                  continent={obj.name}
                ></LocationButton>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
