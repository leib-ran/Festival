import { logRoles, render } from "@testing-library/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, fafair } from "@fortawesome/free-solid-svg-icons";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex justify-center mb-2 h-200">
        <div className="border-red-800 bg-white opacity-50 border-2 w-80 text-center h-136 m-auto">
          <div className="opacity-initial">
            <span>price $233 </span>
            <span className="line-through text-xs	">$400</span>
            <img
              className="m-auto opacity-false"
              src="/images/tents/tent.jpg"
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
              className="text-gray-400"
              icon={faPlus}
            ></FontAwesomeIcon>
            <div className="border-gray-600	border-2 w-6 h-6 text-xs items-start text-center">
              <span>1</span>
            </div>
          </div>
        </div>
        <div className="hidden border-green-300 h-96 ml-0 border-2 w-80 text-center m-auto mb-2">
          <h1>product name</h1>
          <p>
            explnation of the product Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse venenatis, sem quis dapibus sagittis,
            tellus lorem fringilla tellus, ut elementum justo est vel felis.
            Nullam ut semper turpis. Vivamus scelerisque sed justo eu viverra.
          </p>
          <h1 className="text-gray-500	">Gallery</h1>
          <div className="flex justify-center">
            <img
              className="rounded-full w-16 h-16"
              src="/images/tents/tent2.jpg"
              alt=""
            />
            <img
              className="rounded-full w-16 h-16"
              src="/images/tents/tent3.jpg"
              alt=""
            />
            <img
              className="rounded-full w-16 h-16"
              src="/images/tents/tent4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
