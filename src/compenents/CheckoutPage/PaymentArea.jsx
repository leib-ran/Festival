import { useState, useEffect, useRef } from "react";

export function PaymentArea() {
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: 650.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log("shuki");
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
