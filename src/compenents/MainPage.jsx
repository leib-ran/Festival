import React from "react";
import Navbar from "./Navbar";
import BottomPage from "./BottomPage";

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      ran: 2,
    };
  }
  render() {
    return (
      <div className="flex flex-col h-screen">
        <Navbar className="mb-auto"></Navbar>
        <footer>
          <BottomPage></BottomPage>
        </footer>
      </div>
    );
  }
}
