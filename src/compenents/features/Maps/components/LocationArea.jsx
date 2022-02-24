import {
  faGlobeAfrica,
  faGlobeAsia,
  faGlobeEurope,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";

import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalcenter, globalZoom } from "../../../../actions";
import LocationButton from "../../../Pages/HomePage/LocationButton";

export default function LocationArea(props) {
  const map = useSelector((state) => state.mapUpdate);
  const dispatch = useDispatch();

  const onClick = useCallback((center, zoom) => {
    dispatch(globalZoom(zoom));
    dispatch(globalcenter(center));
  }, []);

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
            const random = Math.round(Math.random() * 100000);
            return (
              <div key={random} onClick={() => onClick(obj.center, obj.zoom)}>
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
