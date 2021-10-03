import React from "react";
import Map from "../Map/Map";

export default function HomePageMap() {
  let mapContainer = {
    scrollWheelZoom: true,
    center: [2.1628718, 22.8452393],
    zoom: 3,
    scrollWheelZoom: false,
  };
  let position = [0, -100];
  let TileLayer = {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  };
  let popup = "Yigal Alon St 90, Tel Aviv-Yafo";
  let className = "w-full h-full";
  return (
    <div>
      <Map
        mapContainer={mapContainer}
        className={className}
        TileLayer={TileLayer}
        position={position}
        popup={popup}
      ></Map>
    </div>
  );
}
