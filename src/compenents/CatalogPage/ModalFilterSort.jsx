import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { extendHeight, shortendHideWidth } from "../../actions";
import {
  getQueryValue,
  isQueryFound,
  pushTheUpdatedUrl,
} from "../../helper/catalogHandlers";
import { getUrlDataBase } from "../../helper/config";
import ModalCategoryButton from "./ModalCategoryButton";

export default function ModalFilterSort(props) {
  const width = useSelector((state) => state.widthFilterSortModal);
  const subcategory = useSelector((state) => state.subCategory);
  const typeSortDefault = "asc";
  const dispatch = useDispatch();

  const [subCategories, setSubCategory] = useState([]);
  useEffect(async () => {
    const result = await axios(
      `${getUrlDataBase()}/subcategories?categoryid=${props.categoryName}`
    );

    setSubCategory(result.data);
  }, [props.categoryName]);
  return (
    <div
      className={`transition inset-y-0 right-0 shadow-2xl	fixed duration-2000 delay-1000 ease-in-out w-${width} overflow-hidden`}
    >
      <div className="">
        <div className="flex bg-white  justify-between">
          <div className=""></div>
          <div>{titleFilterSort()}</div>
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch(extendHeight());
              dispatch(shortendHideWidth());
            }}
          >
            x
          </div>
        </div>
        <div></div>
        {subCategories.map((element) => {
          return (
            <div
              key={element.id}
              onClick={(e) => {
                pushTheUpdatedUrl(props.props, [{ subcategoryId: element.id }]);
              }}
            >
              <ModalCategoryButton name={element.name} />
            </div>
          );
        })}
        <div>
          <div className="text-center">Sort</div>{" "}
          {getSortList().map((element, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  pushTheUpdatedUrl(props.props, [
                    { _sort: Object.values(element)[0] },
                    { _order: getOrder(props.props) },
                  ]);
                }}
              >
                <ModalCategoryButton name={Object.keys(element)[0]} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function getOrder(props) {
  if (!isQueryFound(props, "_order")) {
    return "desc";
  } else {
    return sortObj[getQueryValue(props, "_order")];
  }
}

function titleFilterSort() {
  return "Filter&Sort";
}

function getSortList() {
  return [{ price: "price" }, { rank: "rank" }, { name: "title" }];
}

const sortObj = {
  desc: "asc",
  asc: "desc",
};
