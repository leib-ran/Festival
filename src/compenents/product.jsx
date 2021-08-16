import { render } from "@testing-library/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, fafair } from "@fortawesome/free-solid-svg-icons";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="border-green-300 border-2 w-80 text-center m-auto mb-2">
        <h1>product name</h1>
        <p>explnation of the product</p>
        <span>price $233</span>
        <img className="m-auto" src="/images/tents/tent.jpg"></img>
        <div>
          <div className="flex justify-center">
            <FontAwesomeIcon
              className="text-gray-300 hover:text-yellow-300 cursor-pointer"
              icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="text-gray-300 hover:text-yellow-300 cursor-pointer"
              icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="text-gray-300 hover:text-yellow-300 cursor-pointer"
              icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="text-gray-300 hover:text-yellow-300 cursor-pointer"
              icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="text-gray-300 hover:text-yellow-300 cursor-pointer"
              icon={faStar}
            ></FontAwesomeIcon>
          </div>
        </div>

        <div>
          <p>The product comes to your country</p>
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
        <div></div>
        <FontAwesomeIcon
          className="text-gray-400"
          icon={faPlus}
        ></FontAwesomeIcon>
        <div className="border-gray-600	border-2 w-6 h-6 text-xs items-start text-center">
          <span>1</span>
        </div>
        <div>come to your country</div>
      </div>
    );
  }
}
