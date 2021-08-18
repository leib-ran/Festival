import React from "react";
import Product from "./product";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nothing: 0,
    };
  }

  render() {
    return (
      <div>
        <h1 className="text-center text-5xl">Holy Mally</h1>
        <Product addToCart={this.props.addToCart}></Product>
      </div>
    );
  }
}
