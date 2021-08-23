import React from "react";
import "../Carousel/carousel.css";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show || 0,
    };
  }
  render() {
    return (
      <div>
        <div className="">
          <div
            className="transition duration-500 ml-auto mr-auto flex overflow-hidden w-96 relative"
            style={{
              transform: "translateX(20px)",
            }}
          >
            <div className="text-5xl mt-auto mb-auto cursor-pointer">
              &#8249;
            </div>
            {this.props.children}
            <div className="text-5xl mt-auto mb-auto cursor-pointer bg-blue-300 z-10">
              &#8250;
            </div>
          </div>
        </div>
      </div>
    );
  }
}
