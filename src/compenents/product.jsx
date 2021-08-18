import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPlus,
  faMinus,
  faPlane,
  faLightbulb,
  faCampground,
  faBed,
} from "@fortawesome/free-solid-svg-icons";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "hidden",
      mainImage: "/images/tents/tent.jpg",
      srcImage: "/images/tents/tent.jpg",
      quan: 0,
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.addOne = this.addOne.bind(this);
    this.subOne = this.subOne.bind(this);
  }

  show() {
    this.setState({ display: "block" });
  }
  hide() {
    this.setState({ display: "hidden" });
  }

  changeImage(pic) {
    this.setState({ mainImage: pic });
  }

  addOne() {
    let num = this.state.quan + 1;
    this.setState({ quan: num });
  }
  subOne() {
    let num = this.state.quan == 0 ? 0 : this.state.quan - 1;
    this.setState({ quan: num });
  }

  render() {
    return (
      <div onMouseLeave={this.hide} className="flex justify-center mb-2 h-200 ">
        <div
          className="border-red-800 bg-white opacity-70 border-2 w-80 text-center h-136"
          onMouseEnter={this.show}
        >
          <div className="opacity-false cursor-default">
            <h1 className="font-bold">
              {
                <FontAwesomeIcon
                  className=""
                  icon={faCampground}
                ></FontAwesomeIcon>
              }
              Felice Tent{" "}
            </h1>
            <span>price</span>
            <span className="text-green-800">$233 </span>
            <span className="line-through text-xs	">$400</span>
            <img
              className="m-auto opacity-false"
              src={this.state.mainImage}
            ></img>
            <div>
              <div className="flex justify-center">
                <FontAwesomeIcon
                  className="text-yellow-300 cursor-pointer"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="text-yellow-300 cursor-pointer"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="text-yellow-300 cursor-pointer"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="text-yellow-300 cursor-pointer"
                  icon={faStar}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="text-gray-300 cursor-pointer"
                  icon={faStar}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>

          <div>
            <p>
              <FontAwesomeIcon
                className="mr-1 cursor-pointer"
                icon={faPlane}
              ></FontAwesomeIcon>
              <span className="bg-green-300 w-2 h-2 pr-1 text-white rounded-full ">
                {" "}
                &#10003;{" "}
              </span>
              <div>
                <span className="mr-1">Instock</span>
                <span className="bg-green-300 w-2 h-2 pr-1 text-white rounded-full ">
                  {" "}
                  &#10003;{" "}
                </span>
              </div>
            </p>
            <p className="text-bold font-bold">Sub categories </p>
          </div>
          <div>
            <a className="mr-1 cursor-pointer	 " src="#"></a>
            <a className="mr-5 cursor-pointer	 " src="#">
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

          <div className="flex justify-center">
            <FontAwesomeIcon
              className="text-gray-400 mr-1 cursor-pointer"
              icon={faPlus}
              onClick={this.addOne}
            ></FontAwesomeIcon>
            <div className="border-gray-600	border-2 w-6 h-6 text-xs items-start text-center cursor-default">
              <span>{this.state.quan}</span>
            </div>
            <FontAwesomeIcon
              className="text-gray-400 ml-1 cursor-pointer"
              icon={faMinus}
              onClick={this.subOne}
            ></FontAwesomeIcon>
          </div>
          <div
            className="bg-red-800 pb-2 text-white cursor-pointer hover:bg-yellow-500 hover:text-gray-900"
            onClick={(e, props) => this.props.addToCart(this.state.quan)}
          >
            <span>Add to cart</span>
          </div>

          <div className="bg-red-800 pb-2 text-white cursor-pointer hover:bg-yellow-500 hover:text-gray-900">
            <span>Buy</span>
          </div>
        </div>
        <div
          className={`${this.state["display"]} border-red-800 bg-white opacity-70 border-2 w-80 text-center h-136`}
        >
          <h1>product name</h1>
          <p>
            explnation of the product Lorem ipsum dolor sit aHmet, consectetur
            adipiscing elit. Suspendisse venenatis, sem quis dapibus sagittis,
            tellus lorem fringilla tellus, ut elementum justo est vel felis.
            Nullam ut semper turpis. Vivamus scelerisque sed justo eu viverra.
          </p>
          <h1 className="text-gray-500	">Gallery</h1>
          <div
            className="flex justify-center"
            onMouseLeave={(e) => this.changeImage(this.state.srcImage)}
          >
            <img
              onMouseEnter={(e) => this.changeImage(e.target.src)}
              className="rounded-full w-16 h-16"
              src="/images/tents/tent2.jpg"
              alt="tent pic"
            />
            <img
              onMouseEnter={(e) => this.changeImage(e.target.src)}
              className="rounded-full w-16 h-16"
              src="/images/tents/tent3.jpg"
              alt="tent pic"
            />
            <img
              onMouseEnter={(e) => this.changeImage(e.target.src)}
              className="rounded-full w-16 h-16"
              src="/images/tents/tent4.jpg"
              alt="tent pic"
            />
          </div>
        </div>
      </div>
    );
  }
}
