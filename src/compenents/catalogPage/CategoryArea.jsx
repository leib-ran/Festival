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
      sortType: "",
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
  sortProduct(target) {
    this.setState({ sortType: target.value });
  }

  render() {
    const pattern =
      this.props.searchWord.length >= 3
        ? new RegExp(
            `.*(${this.props.searchWord.split(" ").join("|")}).*`,
            "im"
          )
        : new RegExp(".*");

    let filteredData = this.state.prodArr.filter((element, index) => {
      let { nameProduct, category, description, ...rest } = { ...element };
      let doc = [nameProduct, category, description].join();
      return pattern.test(doc);
    });

    filteredData.sort();

    console.log();

    return (
      <div>
        <div className="flex">
          <div>
            <select
              className="border-black border-2 m-0"
              onChange={(e) => this.sortProduct(e.target)}
              name=""
              id=""
            >
              <option value="" selected>
                Sort
              </option>
              <option value="rank">rate</option>
              <option value="lowUsdprice">low price to high price</option>
              <option value="Usdprice">high price to low price</option>
              <option value="nameProduct">alef beit</option>
            </select>
            <Filter filterData={filteredData} />
          </div>
          <div className="ml-auto mr-auto">
            <h1 className="text-center">products</h1>

            <div className="flex flex-wrap justify-center ml-auto mr-auto">
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
