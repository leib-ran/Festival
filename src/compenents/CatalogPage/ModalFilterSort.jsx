import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  extendHeight,
  shortendHide,
  shortendHideWidth,
  sorttype,
  subCategoryName,
} from "../../actions";

import ModalCategoryButton from "./ModalCategoryButton";

export default function ModalFilterSort(props) {
  const width = useSelector((state) => state.widthFilterSortModal);
  const subcategory = useSelector((state) => state.subCategory);
  const [typeSort, setTypeSort] = useState("asc");
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  const dispatch3 = useDispatch();

  const [subCategories, setSubCategory] = useState([]);
  useEffect(async () => {
    const result = await axios(
      `http://localhost:5000/subcategory?categoryid=${props.categoryName}`
    );
    setSubCategory(result.data);
  }, []);
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
              onClick={(e) => {
                const s = `&subcategoryId=${element.id}`;
                dispatch2(subCategoryName(s));
              }}
            >
              <ModalCategoryButton name={element.name} />
            </div>
          );
        })}
        <div>
          <div className="text-center">Sort</div>{" "}
          {getSortList().map((element) => {
            return (
              <div
                onClick={() => {
                  setTypeSort(sortObj[typeSort]);
                  dispatch3(
                    sorttype(
                      `&_sort=${Object.values(element)[0]}&_order=${typeSort}`
                    )
                  );
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
