import React from "react";
import Item from "./item";
import PaymentArea from "./PaymentArea";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: localStorage.getItem("items") || "[]",
      priceOfItem: 0,
    };
    this.setPrice = this.setPrice.bind(this);
  }

  setPrice(target, price) {
    let priceProduct = Number(target.value) * Number(price);
    this.setState({ priceOfItem: priceProduct });
  }

  render() {
    return (
      <div className="flex justify-center">
        <div className="ml-5">
          {JSON.parse(this.state.items).map((item) => {
            return <Item data={item} setPrice={this.setPrice}></Item>;
          })}
        </div>
        <PaymentArea data={JSON.parse(this.state.items)} />
      </div>
    );
  }
}
