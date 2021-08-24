import React from "react";
import Carousel from "../Carousel/Carousel";

export default class HomePage extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <Carousel>
          <img
            src="/images/caruselLink/leftCarusel.jpg"
            className="min-w-full	"
            alt=""
          />
          <img src="/images/tents/tent.jpg" className="min-w-full	" alt="" />
          <img
            src="/images/caruselLink/leftCarusel.jpg"
            className="min-w-full	"
            alt=""
          />
        </Carousel>
      </div>
    );
  }
}
