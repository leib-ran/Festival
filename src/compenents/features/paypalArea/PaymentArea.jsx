import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { PayPalUtil } from "../../../core/util/paypalUtil/paypalUtil";

export function PaymentArea(props) {
  const items = useSelector((state) => state.itemHandler);
  const item = useSelector((state) => state.itemCheckOut);
  const paypalItems = PayPalUtil.convertItemToPaypalObj(items);
  const history = useHistory();
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: paypalItems,
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          history.push("/profile");
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div className="w-120">
      <div ref={paypal}></div>
    </div>
  );
}
