import React from "react";
import Navbar from "../Navbar";
import CategoryArea from "./CategoryArea";

export default class MainCatalogPage extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
    this.searchText = this.searchText.bind(this);
    this.add = this.add.bind(this);
  }

  searchText(target) {
    console.log(target.value);
    if (target.value) {
      this.setState({ input: target.value });
    }
  }
  add() {}

  render() {
    return (
      <div>
        <Navbar searchfunc={this.searchText}></Navbar>
        <CategoryArea></CategoryArea>
      </div>
    );
  }
}
