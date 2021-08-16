import React from "react";
import Navbar from "./Navbar";
import BottomPage from "./BottomPage";
import Content from "./Content";

export default class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      ran: 2,
    };
  }
  render() {
    return (
      <div className="flex flex-col h-screen">
        <header>
          <Navbar className="mb-auto"></Navbar>
        </header>
        <main>
          <Content></Content>
        </main>
        <footer>
          <BottomPage></BottomPage>
        </footer>
      </div>
    );
  }
}
