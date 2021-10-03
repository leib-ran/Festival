import { useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import { useDispatch } from "react-redux";
import { updatemap } from "../../actions";

export default function Map(props) {
  let { center, zoom, scrollWheelZoom } = { ...props.mapContainer };
  let { attribution, url } = { ...props.TileLayer };
  const [map, setMap] = useState(null);
  const dispatch = useDispatch();
  const displayMap = useMemo(
    () => (
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={scrollWheelZoom}
        whenCreated={setMap}
        className={props.className}
      >
        <TileLayer attribution={attribution} url={url} />
        <Marker position={props.position}>
          <Popup>{props.popup}</Popup>
        </Marker>
        <div className="p-4">
          <ZoomControl position="bottomleft" />
        </div>
      </MapContainer>
    ),
    []
  );
  dispatch(updatemap(map));

  return <div>{displayMap}</div>;
}
