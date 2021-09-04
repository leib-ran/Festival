import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map(props) {
  let { center, zoom, scrollWheelZoom } = { ...props.mapContainer };
  let { attribution, url } = { ...props.TileLayer };
  return (
    <div>
      {console.log("ran")}
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={scrollWheelZoom}
        className={props.className}
      >
        <TileLayer attribution={attribution} url={url} />
        <Marker position={props.position}>
          <Popup>{props.popup}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
