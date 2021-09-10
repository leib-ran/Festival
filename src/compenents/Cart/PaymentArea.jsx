import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function PaymentArea(props) {
  const total = useSelector((state) => state.count);
  const items = useSelector((state) => state.itemHandler);
  let sum = 0;
  let price = 0;
  return (
    <div className="md:w-120 w-full h-min-80  md:mr-8 bg-gray-100">
      <div className="h-min-12 font-bold text-4xl border-black border-b-2">
        total item {total}
      </div>
      <div className="flex justify-between">
        <h1>items</h1>
        <div> Quantity</div>
        <div>price</div>
      </div>
      <div>
        {items.map((item) => {
          price =
            Number(item["quan"]) *
            Number(item["Usdprice"].slice(0, item["Usdprice"].length - 1));
          sum += price;
          return (
            <div className="flex justify-between">
              <div className="w-28 pt-4">{item["nameProduct"]}</div>
              <div>{item["quan"]}</div>
              <div>{price}$</div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between">
        <div className="mt-2">Sum</div>
        <div>{sum}$</div>
      </div>
      <h1 className="h-12 pt-4 font-bold text-xl border-black border-b-2">
        shipping
      </h1>
      <div className="flex justify-between">
        <h1>VAT</h1>
        <h1>0.17%</h1>
        <div>{(sum * 0.17).toFixed(2)}$</div>
      </div>
      <div className="flex justify-between border-b-2	border-black">
        <h1>Total</h1>
        <h1>{Number((sum * 0.17).toFixed(2)) + Number(sum)}$</h1>
      </div>
      <Link
        to="/checkout"
        className="bg-red-500 hover:bg-yellow-500 cursor-pointer text-white text-center font-bold p-2"
      >
        checkout
      </Link>
    </div>
  );
}
