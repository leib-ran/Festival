import React from "react";
import Map from "../Map/Map";

export default function HomePageMap() {
  let mapContainer = {
    scrollWheelZoom: true,
    center: [37.1628718, -30.8452393],
    zoom: 2,
    scrollWheelZoom: false,
  };
  let position = [37.1628718, -30.8452393];
  let TileLayer = {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  };
  let popup = "Yigal Alon St 90, Tel Aviv-Yafo";
  let className = "w-96 h-96";
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
