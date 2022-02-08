import React from "react";
import Map from "../../Map/Map";

export default function ContactMap() {
  let mapContainer = {
    scrollWheelZoom: true,
    className: "w-1.2 h-40	",
    center: [28.1628718, 34.8452393],
    zoom: 5,
    scrollWheelZoom: false,
  };
  let position = [32.1628718, 34.8452393];
  let TileLayer = {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  };
  let popup = "Yigal Alon St 90, Tel Aviv-Yafo";
  let className = "w-96 h-80";
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
