import React from "react";
import Navbar from "../header/Navbar";
import BottomPage from "../footer/BottomPage";
import Content from "./Content";

export default class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      cartStatus: 0,
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(quan) {
    this.setState({ cartStatus: quan });
  }

  render() {
    return (
      <div
        className="flex flex-col bg-no-repeat justify-between	min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/links/link_desert_item.jpg")`,
        }}
      >
        <header>
          <Navbar
            quan-cart={this.state.cartStatus}
            className="mb-auto"
          ></Navbar>
        </header>
        <main>
          <Content addToCart={this.addToCart}></Content>
        </main>
        <footer>
          <BottomPage></BottomPage>
        </footer>
      </div>
    );
  }
}
