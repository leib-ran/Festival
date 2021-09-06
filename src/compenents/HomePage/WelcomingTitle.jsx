import React from "react";
import HomePageMap from "./HomePageMap";

export default class WelcomingTitle extends React.Component {
  constructor() {
    super();
    this.state = {
      index: -1,
      show: "100",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ index: 0, show: "0" });
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
              Choose Festival
              <div className="  overflow-hidden  h-full  m-auto   filter  brightness-75 md:rounded-full	 contrast-150	lg:rounded-full sm:rounded-none	 invert	saturate-200	opacity-90">
                <HomePageMap />
              </div>
            </div>
          </div>
          <div className="h-4">
            <div
              className={`opacity-${this.state.show} transition duration-500 ease-in-out`}
            >
              <h1 className="text-8xl font-bold text-white">Welcome</h1>
              <h1 className="text-4xl">Our journey begins here</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
