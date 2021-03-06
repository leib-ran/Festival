import React, { useEffect, useState } from "react";
import queryString from "query-string";
import ToggelCategory from "./ToggelCategory";
import CategoryArea from "../../features/ProductFeature/CategoryArea";
import { useDispatch, useSelector } from "react-redux";
import PagesButton from "./pagesButton";
import { sorttype, subCategoryName } from "../../../actions";
import { getUrlproducts } from "../../../helper/config";
import { urlHandle } from "../../../helper/catalogHandlers";
import { ProductsApi } from "../../../core/http/productsApi";

export default function CatlogPage(props) {
  const dispatch = useDispatch();
  const [rawData, setRawData] = useState([]);
  const [amountOfItems, setAmountOfItems] = useState(0);
  const categoryName = props.history.location.pathname.split("/").pop();
  const subcategory = getSubCatrgory(props);
  const baseUrl = getUrlproducts();
  const queryString = urlHandle(props, [{ "": "" }]);

  useEffect(async () => {
    const result = await ProductsApi.getProductsByCategory(queryString);
    setAmountOfItems(result.data.totalPages);
    setRawData(result.data);
  }, [queryString]);

  useEffect(() => {
    dispatch(sorttype(``));
    dispatch(subCategoryName(``));
  }, [categoryName]);

  return (
    <div>
      <div className="text-center text-4xl">{titleCatlog()}</div>
      <div className="float-right">
        <ToggelCategory categoryName={categoryName} props={props} />
      </div>
      <CategoryArea data={rawData} />
      <PagesButton props={props} amountOfItems={amountOfItems}></PagesButton>
    </div>
  );
}

function titleCatlog() {
  return "Catalog";
}

function getSearchWord(props) {
  let searchWord = "";
  if (props.location) {
    let url = props.location.search;
    let parsedObj = queryString.parse(url);
    searchWord = parsedObj.q;
  }
  return searchWord || "";
}

function getSubCatrgory(props) {
  let subCategory = "";
  const match = props.match;
  if (match) {
    return match.params.id;
  }
}
