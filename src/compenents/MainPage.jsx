import React from "react";
import Navbar from "./Navbar";

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      ran: 2,
    };
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
      </div>
    );
  }
}
