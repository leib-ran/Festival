import { render } from "@testing-library/react";
import React from "react";

export default class Product extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>product name</h1>
      </div>
    );
  }
}
