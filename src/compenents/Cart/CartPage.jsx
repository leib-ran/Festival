import React from "react";
import { useSelector } from "react-redux";
import { getItemsStorage } from "../../helper/config";
import { CartWithItems } from "./CartWithItems";

export default function CartPage(props) {
  const items = useSelector((state) => state.itemHandler);

  return (
    <div>
      <div className="bg-gray-100 pt-4 pb-4 text-center mt-20 text-3xl font-medium	">
        {getCartTitleName()}
      </div>
      {items.length != 0 ? <CartWithItems /> : <div>The cart is empty</div>}
    </div>
  );
}

const getCartTitleName = () => {
  return "Cart";
};
