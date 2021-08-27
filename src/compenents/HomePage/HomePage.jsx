import React from "react";
import Carousel from "../Carousel/Carousel";
import Globe from "./Globe";
import WelcomingTitle from "./WelcomingTitle";

export default class HomePage extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="relative min-h-screen flex">
        <img
          src="/images/homePagebackground/home_page_image.jpg"
          className="inset-0 absolut filter  saturate-200 hue-rotate-180 invert"
        />
        <div className="absolute  top-1/4 left-1/4 w-2/3  mr-auto">
          <div className="absolute  w-2/3 bg-red-500 mb-2 mt-2 h-48 opacity-10"></div>
          <div className="">
            <div className="text-white ">
              <WelcomingTitle />
            </div>
          </div>
        </div>

        <div className="realtive">
          <div className="flex">
            {/* <Globe /> */}
            {/* <Carousel>
                <img
                  src="/images/caruselLink/leftCarusel.jpg"
                  className="min-w-full	"
                  alt=""
                />
                <img
                  src="/images/tents/tent.jpg"
                  className="min-w-full	"
                  alt=""
                />
                <img
                  src="/images/caruselLink/leftCarusel.jpg"
                  className="min-w-full	"
                  alt=""
                />
              </Carousel> */}
          </div>
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IvwS6BYjHG0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
        </div>
      </div>
    );
  }
}
