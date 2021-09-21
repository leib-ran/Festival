import { faBed, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ProductImages(props) {
  return (
    <div>
      <div>
        <img
          className="ml-2 w-96 opacity-false"
          src={props.data.imageUrl}
        ></img>
        <div className="flex justify-center">
          <span className="mr-2 text-xs cursor-pointer">reviews</span>
          stars
        </div>
        <div className="flex justify-center mt-2">
          {props.data.galleryImages.map((src) => {
            return (
              <img
                // onClick={(e) => this.changeImage(e.target.src)}
                className="rounded-full w-16 h-16 mr-2"
                src={src}
                alt="tent pic"
              />
            );
          })}
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
