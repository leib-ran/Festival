import Card from "./Card";
import React, { useEffect, useState } from "react";
import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";
import queryString from "query-string";
import ToggelCategory from "./ToggelCategory";
import ModalFilterSort from "./ModalFilterSort";
import CategoryArea from "./CategoryArea";
import ModalCategoryButton from "./ModalCategoryButton";
import axios from "axios";
import { products } from "../../helper/databaseKeyName";
import { useSelector } from "react-redux";
import PagesButton from "./pagesButton";

export default function CatlogPage() {
  const [sortedData, setSortedData] = useState([]);
  const [rawData, setRawData] = useState([]);
  const pageNumber = useSelector((state) => state.pagination);

  useEffect(async () => {
    const result = await axios(
      `http://localhost:5000/products?_page=${pageNumber}`
    );
    setRawData(result.data);
  }, [pageNumber]);

  return (
    <div>
      <div className="text-center text-4xl">{titleCatlog()}</div>
      <ToggelCategory />
      <CategoryArea data={rawData} />
      <PagesButton></PagesButton>
    </div>
  );
}

function titleCatlog() {
  return "Catalog";
}

// constructor() {
//   super();
//   this.state = {
//     rawData: [],
//     searchWord: "",
//     checked: [],
//     sortedData: [],
//   };
// }

// const searchWord = this.state.searchWord || "";
// const pattern =
//   searchWord.length >= 3
//     ? new RegExp(`.*(${searchWord.split(" ").join("|")}).*`, "im")
//     : new RegExp(".*");

// let filteredData = this.state.sortedData.filter((element, index) => {
//   let { nameProduct, category, description, ...rest } = { ...element };
//   let doc = [nameProduct, category, description].join();
//   return pattern.test(doc);
// });
// {
//   filteredData = filteredData.filter((el) => {
//     for (const iterator of this.state.checked) {
//       if (
//         Object.values(el["categories"]).includes(iterator) ||
//         this.state.checked.length === 0
//       ) {
//         return true;
//       }
//     }
//     if (this.state.checked.length == 0) {
//       return true;
//     }
//     return false;
//   });
// }

// componentDidUpdate() {
//   let newSearchWord = this.getSearchWord();
//   if (this.state.searchWord != newSearchWord) {
//     this.setState({ searchWord: newSearchWord });
//   }
// }

// getSearchWord() {
//   let url = this.props.location.search;
//   let parsedObj = queryString.parse(url);
//   let searchWord = parsedObj.q;
//   return searchWord;
// }

// selectedSubCategories(target) {
//   let checkedCategories = [...this.state["checked"]];
//   if (target.checked == true) {
//     if (checkedCategories.includes(target.name) == false) {
//       checkedCategories.push(target.name);
//     }
//   } else {
//     if (checkedCategories.includes(target.name) == true) {
//       checkedCategories = checkedCategories.filter((el) => el != target.name);
//     }
//   }
//   this.setState({ checked: checkedCategories });
// }

// sortProduct(target) {
//   let copyProductsArr = [...this.state.prodArr];
//   switch (target.value) {
//     case "nameProduct":
//       copyProductsArr.sort((a, b) => {
//         return a.nameProduct > b.nameProduct ? 1 : -1;
//       });
//       this.setState({ sortedData: copyProductsArr });
//       break;
//     case "lowUsdprice":
//       copyProductsArr.sort((a, b) => {
//         return (
//           a.Usdprice.substring(0, a.Usdprice.length - 1) -
//           b.Usdprice.substring(0, b.Usdprice.length - 1)
//         );
//       });
//       this.setState({ sortedData: copyProductsArr });
//       break;
//     case "Usdprice":
//       copyProductsArr.sort((a, b) => {
//         return (
//           b.Usdprice.substring(0, b.Usdprice.length - 1) -
//           a.Usdprice.substring(0, a.Usdprice.length - 1)
//         );
//       });
//       this.setState({ sortedData: copyProductsArr });
//       break;
//     case "rank":
//       copyProductsArr.sort((a, b) => {
//         return b.rank - a.rank;
//       });
//       this.setState({ sortedData: copyProductsArr });
//       break;
//   }
// }

// hideToggle() {
//   this.setState({ filterSortModalDisplay: true, modalWidth: "96" });
// }

// return (
//   <div>
//      <div>
//        {<ToggelCategory></ToggelCategory>}
//        <div className="flex">
//          <div>
//            <div>
//              {/* <select
//              className="border-black border-2 m-0"
//              onChang
//              e={(e) => this.sortProduct(e.target)}
//              name=""
//              id=""
//            >
//              <option value="" selected>
//                Sort
//              </option>
//              <option value="rank">rate</option>
//              <option value="lowUsdprice">low price to high price</option>
//              <option value="Usdprice">high price to low price</option>
//              <option value="nameProduct">alef beit</option>
//            </select> */}
//            </div>
//            {/* <Filter
//            filterData={filteredData}
//            selectBox={this.selectedSubCategories}
//          /> */}
//          </div>
//          <div className="ml-auto mr-auto">
//            <div className="m-auto w-136">
//              {/* <div className="flex flex-wrap justify-center">
//                {filteredData.map((element, index) => {
//                  return <Card key={index} data={element}></Card>;
//                })}
//              </div> */}
//            </div>
//          </div>
//          <ModalFilterSort
//            modalWidth={this.state.modalWidth}
//          ></ModalFilterSort>
//        </div>
//      </div>
//    </div>
//  );
