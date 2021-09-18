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
  faEraser,
} from "@fortawesome/free-solid-svg-icons";
import AddToCartRe from "./AddToCart";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      display: "hidden",
      mainImage: this.props.data ? this.props.data.imageUrl : "",
      srcImage: this.props.data ? this.props.data.imageUrl : "",
      quan: 1,
      show: "hidden",
    };

    this.addOne = this.addOne.bind(this);
    this.subOne = this.subOne.bind(this);
    this.input = React.createRef();
  }

  changeImage(pic) {
    this.setState({ mainImage: pic });
  }
  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  addOne() {
    let num = this.state.quan + 1;
    this.setState({ quan: num });
  }

  addToLocalStorage(item) {
    item["quan"] = this.input.current.value;
    let items = localStorage.getItem("items") || [];
    if (items.length == 0) {
      localStorage.setItem("items", JSON.stringify([item]));
    } else {
      let parsedObj = JSON.parse(items).concat(item);
      localStorage.setItem("items", JSON.stringify(parsedObj));
    }
  }

  subOne() {
    let num = this.state.quan == 1 ? 1 : this.state.quan - 1;
    this.setState({ quan: num });
  }

  render() {
    return (
      <div>
        {this.props.data && (
          <div>
            <div
              style={{ width: "80rem" }}
              className="border-red-800 bg-white opacity-70 border-2 w-80 m-auto text-center "
            >
              <div className="opacity-false cursor-default">
                <div className="flex justify-between">
                  <div>
                    <img
                      className="ml-2 w-96 opacity-false"
                      src={this.state.mainImage}
                    ></img>
                    <div className="flex justify-center">
                      <span className="mr-2 text-xs cursor-pointer">
                        reviews
                      </span>
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
                    <div className="flex justify-center mt-2">
                      <img
                        onClick={(e) => this.changeImage(e.target.src)}
                        className="rounded-full w-16 h-16 mr-2"
                        src="/images/tents/tent2.jpg"
                        alt="tent pic"
                      />
                      <img
                        onClick={(e) => this.changeImage(e.target.src)}
                        className="rounded-full w-16 h-16 mr-2"
                        src="/images/tents/tent3.jpg"
                        alt="tent pic"
                      />
                      <img
                        onClick={(e) => this.changeImage(e.target.src)}
                        className="rounded-full w-16 h-16  mr-2"
                        src="/images/tents/tent4.jpg"
                        alt="tent pic"
                      />
                    </div>
                    <div>
                      <p className="text-bold font-bold">Tags </p>
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
                  </div>
                  <div className="mr-auto ml-auto">
                    <h1 className="font-bold text-5xl">
                      {
                        <FontAwesomeIcon
                          className=""
                          icon={faCampground}
                        ></FontAwesomeIcon>
                      }
                      {this.props.data["title"]}
                    </h1>
                    <div className="text-left   ">
                      <span className="text-left text-  xl font-bold ">
                        price:
                      </span>
                      <span className="text-green-800 text-3xl">
                        USD {this.props.data["price"]}
                        {"$"}
                      </span>
                      <span className="line-through text-xs"> $400</span>
                    </div>
                    <div className="text-left">
                      <p>Size: 2 people</p>
                      <p>Material:cutton</p>
                      <p>poles: cooper with rubber</p>
                      <p> Colors: white and oranges</p>
                      <p>Brand: fl tents</p>
                      <p> weight:2kg</p>
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
                      </div>
                      <div className="flex">
                        <span>Quantity:</span>
                        <FontAwesomeIcon
                          className="text-gray-400 text-2xl mr-1 cursor-pointer"
                          icon={faPlus}
                          onClick={this.addOne}
                        ></FontAwesomeIcon>
                        <input
                          className="border-gray-600	border-2 w-6 h-6 text-xs items-start text-center cursor-default"
                          value={this.state.quan}
                          ref={this.input}
                        />
                        <FontAwesomeIcon
                          className="text-gray-400 text-2xl ml-1 cursor-pointer"
                          icon={faMinus}
                          onClick={() => this.subOne}
                        ></FontAwesomeIcon>
                      </div>

                      <div className={`${this.state.show}`}>
                        your product is added to the cart
                      </div>
                      <AddToCartRe
                        quan={this.state.quan}
                        data={this.props.data}
                      />
                      <div className="bg-red-800 pb-2 text-white mt-2 cursor-pointer hover:bg-yellow-500 hover:text-gray-900">
                        <span>Buy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}{" "}
      </div>
    );
  }
}
