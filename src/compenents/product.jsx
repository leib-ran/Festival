import { render } from "@testing-library/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>product name</h1>
        <p>explnation of the product</p>
        <span>price $233</span>
        <img src="/images/tents/tent.jpg"></img>
        <div className="flex">
          <FontAwesomeIcon
            className="text-gray-300 hover:text-yellow-300"
            icon={faStar}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="text-gray-300 hover:text-yellow-300"
            icon={faStar}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="text-gray-300 hover:text-yellow-300"
            icon={faStar}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="text-gray-300 hover:text-yellow-300"
            icon={faStar}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="text-gray-300 hover:text-yellow-300"
            icon={faStar}
          ></FontAwesomeIcon>
        </div>
      </div>
    );
  }
}
