import React from "react";
import ItemsList from "./ItemsList";
import PaymentArea from "./PaymentArea";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: localStorage.getItem("items") || "[]",
    };
  }

  render() {
    return (
      <div>
        <div className="bg-gray-100 pt-4 pb-4 text-center mt-20 text-3xl font-medium	">
          Cart
        </div>
        <div className="md:flex mt-4 ">
          <div className="ml-5">
            <ItemsList />
          </div>
          <PaymentArea data={JSON.parse(this.state.items)} />
        </div>
      </div>
    );
  }
}
