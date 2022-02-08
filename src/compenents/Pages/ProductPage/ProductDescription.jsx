import { faMinus, faPlane, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { updateItemCheckout } from "../../../actions";
import {
  addOne,
  getIdName,
  getItemDescrpitionName,
  getItemsStorage,
  getQuantityKeyNameForItems,
  getstokeQuantity,
  getTitleFromItems,
  subOne,
} from "../../../helper/config";
import AddToCartRe from "./AddToCart";
import { VButton } from "./VButton";
import { XButton } from "./XButton";

export function ProductDescription(props) {
  const initialQuan = 1;
  const [productQuan, setProductQuan] = useState(initialQuan);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="w-96">
      <h1 className=" text-3xl">{props.data[getTitleFromItems()]}</h1>
      <div className="text-left   ">
        <span className="text-left text-  xl font-bold "></span>
        <div>{props.data.productDescription}</div>
      </div>
      <div className="text-left">
        <div>
          <div>
            <FontAwesomeIcon
              className="mr-1 cursor-pointer"
              icon={faPlane}
            ></FontAwesomeIcon>
            {props.data[getstokeQuantity()] ? <VButton /> : <XButton />}
            <div>
              <span className="mr-1">finstock</span>
              <VButton />
            </div>
          </div>
        </div>
        <span className="text-green-800 float-right text-3xl">
          {props.data["price"]}
          {"$"}
        </span>
        <span className="line-through text-xs"> $400</span>
        <div className="flex">
          <span>Quantity:</span>
          <FontAwesomeIcon
            className="text-gray-400 text-2xl mr-1 cursor-pointer"
            icon={faPlus}
            onClick={() => setProductQuan(addOne(productQuan))}
          ></FontAwesomeIcon>

          <div className="border-gray-600	border-2 w-6 h-6 text-xs items-start text-center cursor-default">
            {productQuan}
          </div>
          <FontAwesomeIcon
            className="text-gray-400 text-2xl ml-1 cursor-pointer"
            icon={faMinus}
            onClick={() => setProductQuan(subOne(productQuan))}
          ></FontAwesomeIcon>
        </div>

        <AddToCartRe quan={productQuan} data={props.data} />
        <div
          className="bg-red-800 text-center pb-2 text-white mt-2 cursor-pointer hover:bg-yellow-500 hover:text-gray-900"
          onClick={() => {
            dispatch(
              updateItemCheckout({ product: props.data, quan: productQuan })
            );
            history.push("/checkout");
          }}
        >
          <span>Buy</span>
        </div>
      </div>

      {/* <p>Size: 2 people</p>
                      <p>Material:cutton</p>
                      <p>poles: cooper with rubber</p>
                      <p> Colors: white and oranges</p>
                      <p>Brand: fl tents</p>
                      <p> weight:2kg</p> */}
    </div>
  );
}
