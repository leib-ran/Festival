import React from "react";
import Carousel from "../Carousel/Carousel";
import WelcomingTitle from "./WelcomingTitle";
import HomePageMap from "./HomePageMap";
import CategoriesArea from "./CategoriesArea";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="relative h-screen  z-1 flex">
          <img
            src="/images/homePagebackground/home_page_image.jpg"
            className="inset-0 absolute w-full h-screen z-0 filter saturate-200 hue-rotate-180 invert"
          />
          <div className="absolute w-full top-1/6 left-1/5 m-2">
            <div className="absolute w-full bg-red-500 mb-2 mt-2 opacity-10"></div>
            <div className="">
              <div className="text-white flex">
                <WelcomingTitle />
              </div>
            </div>
          </div>
        </div>

        <div className="realtive">
          <div className=" ">
            <CategoriesArea />
          </div>
        </div>
      </div>
    );
  }
}
