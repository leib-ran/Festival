import Card from "./Card";
import React from "react";
import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import Filter from "../catalogPage/Filter";

export default class CategoryArea extends React.Component {
  constructor() {
    super();
    this.state = {
      prodArr: [],
      searchWord: "",
    };
  }

  componentDidMount() {
    fetch("/products.json")
      .then((res) => {
        return res;
      })
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        this.setState({ prodArr: products["data"] });
      });
  }

  render() {
    const pattern =
      this.props.searchWord.length >= 3
        ? new RegExp(
            `.*(${this.props.searchWord.split(" ").join("|")}).*`,
            "im"
          )
        : new RegExp(".*");

    const filteredData = this.state.prodArr.filter((element, index) => {
      let { nameProduct, category, description, ...rest } = { ...element };
      let doc = [nameProduct, category, description].join();
      return pattern.test(doc);
    });

    return (
      <div>
        <div className="flex">
          <Filter filterData={filteredData} />
          <div className="ml-auto mr-auto">
            <h1 className="text-center">products</h1>

            <div className="flex flex wrap justify-center ml-auto mr-auto">
              {filteredData.map((element, index) => {
                return <Card key={index} data={element}></Card>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
