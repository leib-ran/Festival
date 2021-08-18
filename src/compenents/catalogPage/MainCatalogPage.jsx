import React from "react";
import Navbar from "../Navbar";
import CategoryArea from "./CategoryArea";

export default class MainCatalogPage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <CategoryArea></CategoryArea>
      </div>
    );
  }
}
