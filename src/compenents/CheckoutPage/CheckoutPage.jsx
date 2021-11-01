import React from "react";
import { AccountTotal } from "./AccountTotal";
import { CostomerDetails } from "./CostomerDetails";
import { ItemsArea } from "./ItemsArea";
import { PaymentArea } from "./PaymentArea";

export default function CheckoutPage(props) {
  return (
    <div>
      <div className=" mt-10 flex">
        <div className="w-128 ml-8">
          <ItemsArea></ItemsArea>
        </div>
        <div className=" shadow-lg w-120">
          <CostomerDetails />
        </div>
        <div>
          <AccountTotal />
        </div>
      </div>
      <div>
        <PaymentArea />
      </div>
    </div>
  );
}
