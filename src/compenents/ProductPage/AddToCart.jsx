import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItem, increament } from "../../actions";
import {
  changeQuantityOfItemFromItemsArray,
  getIdName,
  getItemsStorageParsed,
  getQuantityKeyNameForItems,
  setItemsStorage,
  setQuantityFromStorage,
} from "../../helper/config";

function AddToCartRe(props) {
  const dispatchItem = useDispatch();
  const dispatchCart = useDispatch();
  const count = useSelector((state) => state.count);
  const item = props.data;
  const quantity = props.quan;
  return (
    <div>
      <div
        className="bg-red-800 pb-2 text-white cursor-pointer hover:bg-yellow-500 hover:text-gray-900"
        onClick={(e) => {
          const currentItemQuantity = getCurrentQuantity(item);
          const newItemQuantity =
            Number(currentItemQuantity) + Number(quantity);
          const items = changeQuantityOfItemFromItemsArray(
            item,
            newItemQuantity
          );

          item[getQuantityKeyNameForItems()] = newItemQuantity;
          setQuantityFromStorage(Number(count) + Number(quantity));
          setItemsStorage(items);
          dispatchItem(updateItem(items));
          dispatchCart(increament(quantity));
        }}
      >
        <span>{AddToCart()}</span>
      </div>
    </div>
  );
}

function AddToCart() {
  return "Add to cart";
}

function getCurrentQuantity(item) {
  const items = getItemsStorageParsed();
  const itemFromLocalStorage = items.filter((elmemnt) => {
    return item[getIdName()] === elmemnt[getIdName()];
  });

  return itemFromLocalStorage[0]
    ? Number(itemFromLocalStorage[0][getQuantityKeyNameForItems()]) || 0
    : 0;
}

export default AddToCartRe;
