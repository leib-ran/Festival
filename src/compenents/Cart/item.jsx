import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decreament, increament, updateItem } from "../../actions";
import {
  addOne,
  changeQuantityOfItemFromItemsArray,
  getItemDescrpitionName,
  getItemsStorageParsed,
  getQuantityFromStorage,
  getQuantityKeyNameForItems,
  getTitleFromItems,
  setItemsStorage,
  setQuantityFromStorage,
  subOne,
} from "../../helper/config";
import Remove from "./Remove";

export default function Item(props) {
  const [quantityItem, setCount] = useState(
    props.data[getQuantityKeyNameForItems()]
  );
  const quantityProducts = getQuantityFromStorage();
  const dispatch = useDispatch();

  function handleClick(Action, funcOperation) {
    const newquantityItem = funcOperation(quantityItem);
    setQuantityFromStorage(funcOperation(quantityProducts));

    const items = changeQuantityOfItemFromItemsArray(
      props.data,
      newquantityItem
    );
    if (newquantityItem) {
      dispatch(updateItem(items));
      dispatch(Action(1));
      setItemsStorage(items);
      setCount(newquantityItem);
    }
  }

  return (
    <div className="shadow-lg">
      <div className="m-2 overflow-hidden">
        <h1 className="font-bold">{props.data["nameProduct"]}</h1>
        <div className="float-left min-h-full w-4/12 p-2">
          <img className="" src={props.data["imageUrl"]} alt="cart photo" />
        </div>
        <div>
          <div className="font-bold">{props.data[getTitleFromItems()]}</div>
          <p className="clear-right p-2">
            {props.data[getItemDescrpitionName()]}
          </p>
          <div className="flex">
            <div>Qty</div>
            <div
              className="cursor-pointer"
              onClick={(e) => {
                handleClick(increament, addOne);
              }}
            >
              +
            </div>
            <div className="border-2 border-black text-center m-2 mt-0 min-w-6 h-6">
              {quantityItem}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                handleClick(decreament, subOne);
              }}
            >
              -
            </div>
          </div>
          <div className="float-left bottom-2 clear-right ">
            <Remove index={props.index} />
          </div>
        </div>
      </div>
    </div>
  );
}
