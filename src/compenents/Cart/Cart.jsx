import React from "react";
import Item from "./item";
import PaymentArea from "./PaymentArea";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: localStorage.getItem("items") || [],
    };
  }

  render() {
    return (
      <div className="flex justify-center">
        <div className="ml-5">
          {JSON.parse(this.state.items).map((data) => {
            return <Item data={data}></Item>;
          })}
        </div>
        <PaymentArea />
      </div>
    );
  }
}
