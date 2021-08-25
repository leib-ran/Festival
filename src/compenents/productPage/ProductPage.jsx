import React from "react";
import Navbar from "../Header/Navbar";
import BottomPage from "../Footer/BottomPage";
import Content from "./Content";

export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartStatus: 0,
      data: this.props.data,
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(quan) {
    this.setState({ cartStatus: quan });
  }

  componentDidMount() {
    fetch("/products.json")
      .then((res) => res.json())
      .then((res) => {
        let data = res["data"];
        let product = this.props.match.params.id;
        this.setState({ data: data[product] });
      });
  }

  render() {
    return (
      <div
        className=" bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/links/link_desert_item.jpg")`,
        }}
      >
        <header>
          {/* <Navbar
            quan-cart={this.state.cartStatus}
            className="mb-auto"
          ></Navbar> */}
        </header>
        <main>
          <Content addToCart={this.addToCart} data={this.state.data}></Content>
        </main>
        <footer>{/* <BottomPage></BottomPage> */}</footer>
      </div>
    );
  }
}
