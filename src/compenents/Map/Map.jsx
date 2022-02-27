import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import {
  slideFestivalModal,
  slideFestivalModalHide,
  updatemap,
  updateFestival,
} from "../../actions";
import axios from "axios";

export default function Map(props) {
  const [FestivalObj, setFestivalObj] = useState(null);
  const dispatch = useDispatch();

  useEffect(async () => {
    const result = await axios("http://localhost:8000/festivals");
    setFestivalObj(result.data);
  }, []);
  let { center, zoom, scrollWheelZoom } = { ...props.mapContainer };
  let { attribution, url } = { ...props.TileLayer };

  const zoomState = useSelector((state) => state.globalZoom);
  const centerState = useSelector((state) => state.globalCenter);
  const [map, setMap] = useState(null);
  const popupElRef = useRef(null);
  const hideElement = (festObj) => {
    dispatch(updateFestival(festObj));
    dispatch(slideFestivalModalHide());
    popupElRef.current._close();
  };

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
        {FestivalObj &&
          FestivalObj.map((element) => {
            return (
              <div
                onClick={() => {
                  map.setView(element.position, 7);
                }}
              >
                <Marker key={element.title} position={element.position}>
                  <Popup
                    className="lg:w-96  lg:transform lg:rotate-45 lg:translate-x-16"
                    ref={popupElRef}
                  >
                    <div onClick={() => hideElement(element)}>
                      <div className="text-center font-sans  font-bold">
                        {element.title}
                      </div>
                      <img
                        className="filter invert brightness-75 -hue-rotate-180 cursor-pointer"
                        src={element.gallery[0]}
                        alt=""
                      />
                      <div className="text-left mt-2 leading-5	cursor-pointer">
                        {`${element.description
                          .split(" ")
                          .slice(0, 60)
                          .join(" ")} ...
                        `}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              </div>
            );
          })}
        <div className="p-4"></div>
      </MapContainer>
    ),
    [FestivalObj]
  );
  {
  }
  useEffect(() => {
    if (map) {
      map.setView(centerState, zoomState);
    }
  }, [zoomState, centerState]);

  return <div>{displayMap}</div>;
}
