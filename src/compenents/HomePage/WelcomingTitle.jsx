import React from "react";
import HomePageMap from "./HomePageMap";

export default class WelcomingTitle extends React.Component {
  constructor() {
    super();
    this.state = {
      index: -1,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ index: 0 });
    }, 3000);
  }

  render() {
    return (
      <div className="h-full overflow-hidden">
        <div
          className={`transition-all flex flex-col h-full relative  duration-1000 ease-in-out  "`}
          style={{
            transform: `translateY(${this.state.index * 100}%)`,
          }}
        >
          <div className="relative">
            <div className="w-full h-full absolute bg-gray-500 opacity-60"></div>
            <div className="text-4xl h-full text-center relative">
              Choose festival
              <div className=" overflow-hidden w-80  h-52  m-auto   filter  brightness-75  contrast-150	rounded-full invert	saturate-200		 ">
                <HomePageMap />
              </div>
            </div>
          </div>
          <div className="h-4">
            <h1 className="text-8xl flex-shrink-0 font-bold text-white">
              Welcome
            </h1>
            <h1 className=" text-4xl ">Our journey begins here</h1>
          </div>
        </div>
      </div>
    );
  }
}
