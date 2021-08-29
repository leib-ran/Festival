import React from "react";

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
      <div className="h-44 overflow-hidden">
        <div
          className={`transition-all flex flex-col h-full relative  duration-1000 ease-in-out  "`}
          style={{
            transform: `translateY(${this.state.index * 100}%)`,
          }}
        >
          <div className="text-4xl h-full">Choose festival</div>
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
