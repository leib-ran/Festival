import { logRoles, render } from "@testing-library/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

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
          <div className="opacity-false">
            <span>price $233 </span>
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
              Delivery to your country{" "}
              <span className="bg-green-300 text-gray-500 rounded-full ">
                {" "}
                &#10003;{" "}
              </span>
            </p>
            <p>list of products for sale </p>
          </div>
          <div>
            <a className="mr-5 cursor-pointer	 " src="#">
              Leds
            </a>
            <a className="mr-5 cursor-pointer	 " src="#">
              bed
            </a>
            <a className="mr-5 cursor-pointer	 " src="#">
              Sleeping bag
            </a>
          </div>
          <div>
            <h1>stock quantity</h1>
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
