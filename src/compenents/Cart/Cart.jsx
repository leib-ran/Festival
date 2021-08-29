import React from "react";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: localStorage.getItem("itmes") || "",
    };
  }

  render() {
    return (
      <div>
        <h1>ran</h1>
      </div>
    );
  }
}
