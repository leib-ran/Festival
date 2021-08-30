import React from "react";

export default class PaymentArea extends React.Component {
  constructor() {
    super();
    this.state = {
      itemNumber: 0,
    };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("items"));
    let itemNumber = data.length;
  }

  render() {
    return (
      <div className="w-1/4 h-80  mr-8 bg-gray-100">
        <div className="h-12 font-bold text-4xl border-black border-b-2">
          total item
        </div>
        <h1 className="h-12 pt-4 font-bold text-xl border-black border-b-2">
          shipping
        </h1>
        <h1>VAT</h1>
        <h1>Total</h1>
      </div>
    );
  }
}
