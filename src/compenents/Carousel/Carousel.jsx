import React from "react";
import "../Carousel/carousel.css";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show || 0,
      slideNumber: this.props.children.length,
      index: 0,
    };
  }
  prev() {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    }
  }
  next() {
    console.log(this.state.index);
    if (this.state.index < this.state.slideNumber - this.state.show - 1) {
      this.setState({ index: this.state.index + 1 });
    }
  }

  render() {
    return (
      <div>
        <div className="flex  overflow-hidden w-96">
          <div className="transition duration-500 ml-auto mr-auto flex w-full relative bg-red-500">
            <div
              className="absolute text-white text-5xl inset-y-2/4 left-2 cursor-pointer z-10"
              onClick={this.prev.bind(this)}
            >
              &#8249;
            </div>
            <div
              className="flex"
              style={{
                transform: `translateX(-${this.state.index * 100}%)`,
              }}
            >
              {this.props.children}
            </div>

            <div
              className="absolute  text-5xl cursor-pointer bg-white text-white z-10 right-2 inset-y-2/4 align-middle	"
              onClick={this.next.bind(this)}
            >
              &#8250;
            </div>
          </div>
        </div>
      </div>
    );
  }
}