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
  }

  componentDidMount() {
    fetch(`http://localhost:5000/products/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        let data = res;
        this.setState({ data: data });
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
        <header></header>
        <main>
          <Content data={this.state.data}></Content>
        </main>
      </div>
    );
  }
}
