import React from "react";
import { useSelector } from "react-redux";
import ModalCategoryButton from "./ModalCategoryButton";

export default function ModalFilterSort() {
  const width = useSelector((state) => state.widthFilterSortModal);

  return (
    <div
      className={`transition shadow-2xl	 duration-2000 delay-1000 ease-in-out w-${width} overflow-hidden`}
    >
      <div className="">
        <div className="flex bg-white  justify-between">
          <div></div>
          <div>Filter&Sort</div>
          <div>x</div>
        </div>
        <ModalCategoryButton name="Flight" />
      </div>
    </div>
  );
}
