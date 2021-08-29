import React from "react";
import Item from "./item";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: localStorage.getItem("items") || [],
    };
  }

  render() {
    return (
      <div>
        {JSON.parse(this.state.items).map((data) => {
          return <Item data={data}></Item>;
        })}
      </div>
    );
  }
}
