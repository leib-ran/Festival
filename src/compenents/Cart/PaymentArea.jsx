import React from "react";

export default class PaymentArea extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="w-1/4 h-8 border-black border-black">
        <div>sub total item</div>
        <h1>shipping</h1>
        <h1>VAT</h1>
        <h1>Total</h1>
      </div>
    );
  }
}
