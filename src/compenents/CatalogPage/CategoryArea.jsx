import Card from "./Card";
import React from "react";
import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";
import queryString from "query-string";
import ToggelCategory from "../ToggelCategory/ToggelCategory";
import ModalFilterSort from "./ModalFilterSort";

export default class CategoryArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prodArr: [],
      searchWord: "",
      checked: [],
      sortedData: [],
      modalWidth: 0,
    };
    this.selectedSubCategories = this.selectedSubCategories.bind(this);
    this.hideToggle = this.hideToggle.bind(this);
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
        let searchWord = this.getSearchWord();
        let data = Object.values(products["data"]);
        this.setState({
          prodArr: data,
          sortedData: data,
          searchWord: searchWord,
        });
      });
  }
  componentDidUpdate() {
    let newSearchWord = this.getSearchWord();
    if (this.state.searchWord != newSearchWord) {
      this.setState({ searchWord: newSearchWord });
    }
  }

  getSearchWord() {
    let url = this.props.location.search;
    let parsedObj = queryString.parse(url);
    let searchWord = parsedObj.q;
    return searchWord;
  }

  selectedSubCategories(target) {
    let checkedCategories = [...this.state["checked"]];
    if (target.checked == true) {
      if (checkedCategories.includes(target.name) == false) {
        checkedCategories.push(target.name);
      }
    } else {
      if (checkedCategories.includes(target.name) == true) {
        checkedCategories = checkedCategories.filter((el) => el != target.name);
      }
    }
    this.setState({ checked: checkedCategories });
  }

  sortProduct(target) {
    let copyProductsArr = [...this.state.prodArr];
    switch (target.value) {
      case "nameProduct":
        copyProductsArr.sort((a, b) => {
          return a.nameProduct > b.nameProduct ? 1 : -1;
        });
        this.setState({ sortedData: copyProductsArr });
        break;
      case "lowUsdprice":
        copyProductsArr.sort((a, b) => {
          return (
            a.Usdprice.substring(0, a.Usdprice.length - 1) -
            b.Usdprice.substring(0, b.Usdprice.length - 1)
          );
        });
        this.setState({ sortedData: copyProductsArr });
        break;
      case "Usdprice":
        copyProductsArr.sort((a, b) => {
          return (
            b.Usdprice.substring(0, b.Usdprice.length - 1) -
            a.Usdprice.substring(0, a.Usdprice.length - 1)
          );
        });
        this.setState({ sortedData: copyProductsArr });
        break;
      case "rank":
        copyProductsArr.sort((a, b) => {
          return b.rank - a.rank;
        });
        this.setState({ sortedData: copyProductsArr });
        break;
    }
  }

  hideToggle() {
    this.setState({ filterSortModalDisplay: true, modalWidth: "full" });
  }

  render() {
    const searchWord = this.state.searchWord || "";
    const pattern =
      searchWord.length >= 3
        ? new RegExp(`.*(${searchWord.split(" ").join("|")}).*`, "im")
        : new RegExp(".*");

    let filteredData = this.state.sortedData.filter((element, index) => {
      let { nameProduct, category, description, ...rest } = { ...element };
      let doc = [nameProduct, category, description].join();
      return pattern.test(doc);
    });
    {
      filteredData = filteredData.filter((el) => {
        for (const iterator of this.state.checked) {
          if (
            Object.values(el["categories"]).includes(iterator) ||
            this.state.checked.length === 0
          ) {
            return true;
          }
        }
        if (this.state.checked.length == 0) {
          return true;
        }
        return false;
      });
    }

    return (
      <div>
        <div>
          {!this.state.filterSortModalDisplay && (
            <ToggelCategory hideToggle={this.hideToggle}></ToggelCategory>
          )}
          <div className="flex">
            <div>
              <div>
                {/* <select
                className="border-black border-2 m-0"
                onChang
                e={(e) => this.sortProduct(e.target)}
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
              </select> */}
              </div>
              {/* <Filter
              filterData={filteredData}
              selectBox={this.selectedSubCategories}
            /> */}
            </div>
            <div className="ml-auto mr-auto">
              <div className="w-1/2">
                <div className="flex flex-wrap ml mr-auto">
                  {filteredData.map((element, index) => {
                    return <Card key={index} data={element}></Card>;
                  })}
                </div>
              </div>
            </div>
            <ModalFilterSort
              modalWidth={this.state.modalWidth}
            ></ModalFilterSort>
          </div>
        </div>
      </div>
    );
  }
}
