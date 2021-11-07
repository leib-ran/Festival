import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AccountTotal } from "./AccountTotal";
import { CostomerDetails } from "./CostomerDetails";
import { ItemsArea } from "./ItemsArea";
import { PaymentArea } from "./PaymentArea";
import { ShippingDetails } from "./ShippingDetails";
import { ShippingDetailsEdit } from "./ShippingDetailsEdit";

export default function CheckoutPage(props) {
  const user = useSelector((state) => state.userGlobalState);
  const [isShippingDetails, setShippingDetails] = useState(false);
  const isEdit = useSelector((state) => state.isEditShipping);

  useEffect(() => {
    const isShippingDetails = user.shippingDetails ? true : false;
    setShippingDetails(isShippingDetails);
  }, [user.shippingDetails]);

  return (
    <div>
      <div className=" mt-10 flex">
        <div className="w-128 ml-8"></div>
        <div className=" shadow-lg w-120">
          {isShippingDetails && !isEdit ? (
            <ShippingDetails />
          ) : (
            <ShippingDetailsEdit />
          )}
        </div>
        <div className="shadow-lg w-128">
          <ItemsArea></ItemsArea>
        </div>
      </div>
      <div className="flex mt-8">
        <div className="w-128 ml-8"></div>
        <div className=" ">
          {isShippingDetails && !isEdit && <PaymentArea />}
        </div>
        <div></div>
      </div>
    </div>
  );
}
