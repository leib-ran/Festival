import React from "react";
import { useSelector } from "react-redux";
import { getItemsStorage } from "../../helper/config";
import { CartWithItems } from "./CartWithItems";

export default function CartPage(props) {
  const items = useSelector((state) => state.itemHandler);

  return (
    <div>
      {items.length != 0 && (
        <div className="bg-gray-100 pt-4 pb-4 text-center mt-20 text-3xl font-medium	">
          {getCartTitleName()}
        </div>
      )}
      {items.length != 0 ? (
        <CartWithItems />
      ) : (
        <div className="shadow-lg text-4xl w-1/2 m-auto h-16 mt-20  text-center font-serif">
          Your Dionysus cart is empty
        </div>
      )}
    </div>
  );
}

const getCartTitleName = () => {
  return "Cart";
};
