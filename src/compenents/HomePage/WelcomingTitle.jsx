import React from "react";
import HomePageMap from "./HomePageMap";
import LocationArea from "./LocationArea";

export default class WelcomingTitle extends React.Component {
  constructor() {
    super();
    this.state = {
      index: -1,
      show: "100",
      showCategoryArea: "0",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ index: 0, show: "0", showCategoryArea: "100" });
    }, 3000);
  }

  render() {
    return (
      <div className="lg:w-5/12 md:w-8/12 sm:m-auto md:m-0 sm:w-full overflow-hidden">
        <div
          className={`transition-all relative duration-1000 ease-in-out "`}
          style={{
            transform: `translateY(${this.state.index * 100}%)`,
          }}
        >
          <div className="relative">
            <div className="absolute w-full h-full bg-gray-500 opacity-60"></div>
            <div className="text-4xl  text-center relative">
              CHOOSE FESTIVAL
              <div className="  overflow-hidden  h-full  m-auto   filter  brightness-75 md:rounded-full	 contrast-150	lg:rounded-full sm:rounded-none	 invert	saturate-200	opacity-90">
                <HomePageMap />
              </div>
              <div
                className={`opacity-${this.state.showCategoryArea} transition delay-1000 duration-4000 ease-in-out`}
              >
                <LocationArea />
              </div>
            </div>
          </div>
          <div className="h-4">
            <div
              className={`opacity-${this.state.show} transition duration-500 ease-in-out`}
            >
              <h1 className="text-8xl font-bold text-white">WELCOME</h1>
              <h1 className="text-4xl">OUR JOURNEY BEGINS HERE</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
