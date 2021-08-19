import React from "react";
import Navbar from "../Navbar";
import CategoryArea from "./CategoryArea";

export default class MainCatalogPage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchWord: "",
    };
    this.searchText = this.searchText.bind(this);
  }

  searchText(target) {
    this.setState({ searchWord: target.value });
  }

  render() {
    return (
      <div>
        <Navbar searchfunc={this.searchText}></Navbar>
        <CategoryArea searchWord={this.state.searchWord}></CategoryArea>
      </div>
    );
  }
}
