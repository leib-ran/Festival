import React from "react";
import { CostomerDetails } from "./CostomerDetails";
import { ItemsArea } from "./ItemsArea";

export default function CheckoutPage(props) {
  return (
    <div className=" mt-10 flex">
      <div className="w-128">
        <ItemsArea></ItemsArea>
      </div>
      <div className=" shadow-lg w-120">
        <CostomerDetails />
      </div>
    </div>
  );
}
