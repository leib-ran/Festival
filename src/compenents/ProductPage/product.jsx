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
import { ProductDisplay } from "./ProductDisplay";

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
              className=" bg-white opacity-70 w-80 m-auto text-center "
            >
              <div className="mt-5 opacity-false cursor-default">
                <div className="flex justify-center">
                  <ProductDisplay data={this.props.data} />
                  <div className="ml-4 w-96">
                    <h1 className=" text-3xl">{this.props.data["title"]}</h1>
                    <div className="text-left   ">
                      <span className="text-left text-  xl font-bold ">
                        price:
                      </span>
                      <span className="text-green-800 text-3xl">
                        USD {this.props.data["price"]}
                        {"$"}
                      </span>
                      <span className="line-through text-xs"> $400</span>
                      <div>{this.props.data.productDescription}</div>
                    </div>
                    <div className="text-left">
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
        {/* <p>Size: 2 people</p>
                      <p>Material:cutton</p>
                      <p>poles: cooper with rubber</p>
                      <p> Colors: white and oranges</p>
                      <p>Brand: fl tents</p>
                      <p> weight:2kg</p> */}
      </div>
    );
  }
}
