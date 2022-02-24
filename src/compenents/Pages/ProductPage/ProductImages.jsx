import { faBed, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { addWord, removeSearch } from "../../../helper/config";
import Carousel from "../../Carousel/Carousel";
import Stars from "../../features/Stars.jsx/Stars";

export function ProductImages(props) {
  const [mainImage, setMainImage] = useState(props.data.imageUrl);
  const [tempImage, setTempImage] = useState(props.data.imageUrl);
  const selectedImg = useRef(null);
  function setImages(temp, main) {
    setTempImage(temp);
    setMainImage(main);
  }
  return (
    <div>
      <div>
        <img className="ml-2 w-96 opacity-false" src={mainImage}></img>
        <div className="flex justify-center">
          <span className="mr-2 text-xs cursor-pointer">reviews</span>
          <Stars rank={props.data.rank} />
        </div>
        <div className={`flex justify-center  w-72 m-auto mt-2`}>
          <Carousel show={3}>
            {props.data.galleryImages.map((src, index) => {
              return (
                <img
                  key={index}
                  onClick={(e) => {
                    setImages(src, src);
                    e.target.className = addWord(
                      markerForImage(),
                      e.target.className
                    );

                    if (selectedImg.current) {
                      selectedImg.current.className = removeSearch(
                        markerForImage(),
                        selectedImg.current.className
                      );
                      selectedImg.current = null;
                    }
                    selectedImg.current = e.target;
                  }}
                  onMouseEnter={(e) => {
                    setImages(mainImage, src);
                  }}
                  onMouseLeave={(e) => {
                    setMainImage(tempImage);
                  }}
                  className=" w-1/3  cursor-pointer"
                  src={src}
                  alt="tent pic"
                />
              );
            })}
          </Carousel>
        </div>
        <div>
          <p className="text-bold font-bold">{GetSubCategoryName()} </p>
          <a className="mr-5 cursor-pointer" src="#">
            Leds
            <FontAwesomeIcon
              className="ml-1 cursor-pointer"
              icon={faLightbulb}
            ></FontAwesomeIcon>
          </a>
          <a className="mr-5 cursor-pointer	 " src="#">
            Sleeping bag
            <FontAwesomeIcon
              className="ml-1 cursor-pointer"
              icon={faBed}
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
}

function GetSubCategoryName() {
  return "Tags";
}

function markerForImage() {
  return "filter grayscale border-2 border-black";
}
