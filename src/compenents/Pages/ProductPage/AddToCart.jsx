import { SearchSharp } from "@material-ui/icons";
import axios from "axios";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItem, increament, updateUser } from "../../../actions";
import {
  changeQuantityOfItemFromItemsArray,
  getIdName,
  getItemsStorageParsed,
  getQuantityKeyNameForItems,
  isObjectEmpty,
  setItemsStorage,
  setQuantityFromStorage,
} from "../../../helper/config";

function AddToCartRe(props) {
  const dispatchItem = useDispatch();
  const dispatchCart = useDispatch();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const item = props.data;
  const quantity = props.quan;
  const items = useSelector((state) => state.itemHandler);
  const user = useSelector((state) => state.userGlobalState);

  function localHandleCartItems() {
    const currentItemQuantity = getCurrentQuantity(item);
    const newItemQuantity = Number(currentItemQuantity) + Number(quantity);
    const items = changeQuantityOfItemFromItemsArray(item, newItemQuantity);
    const total = Number(count) + Number(quantity);
    setQuantityFromStorage(total);
    setItemsStorage(items);
    dispatchItem(updateItem(items));
    dispatchCart(increament(quantity));
    return { items: items, quan: total };
  }
  const serverHandleCartItems = (objUser) => {
    const itemsArray = getItemsId(objUser["items"]);
    user.items = itemsArray;
    dispatch(updateUser(user));
    axios
      .put("http://localhost:8000/users", {
        userEmail: user.userEmail,
        items: itemsArray,
        quanItems: objUser["quan"],
      })
      .then(() => {})
      .catch((err) => {});
  };

  return (
    <div>
      <div
        className="bg-blue-900 pb-2 text-center text-white cursor-pointer hover:bg-yellow-500 hover:text-gray-900"
        onClick={(e) => {
          const dataUserObjs = localHandleCartItems();
          if (!isObjectEmpty(user)) {
            serverHandleCartItems(dataUserObjs);
          }
        }}
      >
        <span>{AddToCart()}</span>
      </div>
    </div>
  );
}

function getItemsId(src) {
  const array = [];
  for (const item of src) {
    array.push({ product: item.product._id, quan: item.quan });
  }
  return array;
}

function AddToCart() {
  return "Add to cart";
}

function getCurrentQuantity(item) {
  const items = getItemsStorageParsed();
  const itemFromLocalStorage = items.filter((element) => {
    return item[getIdName()] === element.product[getIdName()];
  });
  return itemFromLocalStorage[0]
    ? Number(itemFromLocalStorage[0][getQuantityKeyNameForItems()]) || 0
    : 0;
}

export default AddToCartRe;
