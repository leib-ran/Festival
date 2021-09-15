import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortendHide, shortendHideWidth } from "../../actions";
import ModalCategoryButton from "./ModalCategoryButton";

export default function ModalFilterSort() {
  const width = useSelector((state) => state.widthFilterSortModal);
  const dispatch = useDispatch();
  return (
    <div
      className={`transition shadow-2xl	 duration-2000 delay-1000 ease-in-out w-${width} overflow-hidden`}
    >
      <div className="">
        <div className="flex bg-white  justify-between">
          <div></div>
          <div>Filter&Sort</div>
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch(shortendHideWidth);
              dispatch(shortendHide);
            }}
          >
            x
          </div>
        </div>
        <ModalCategoryButton name="Flight" />
      </div>
    </div>
  );
}
