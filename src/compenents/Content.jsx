import React from "react";
import Product from "./product";

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      nothing: 0,
    };
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Holy mally</h1>
        <Product></Product>
      </div>
    );
  }
}
