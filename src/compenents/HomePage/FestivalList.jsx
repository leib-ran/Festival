import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { slideFestivalModalMain } from "../../actions";
import DionysusRules from "./DionysusRules";
import { FestivalDetails } from "./FestivelDetails";

export function FestivalsList() {
  const dispatch = useDispatch();
  const FestivalObj = useSelector((state) => state.festivalChosen);
  const index = useSelector((state) => state.modalFestival);
  useEffect(() => {
    setTimeout(() => {
      dispatch(slideFestivalModalMain());
    }, 3000);
  }, []);

  return (
    <div>
      <div className="overflow-hidden h-min-96 w-136">
        <div
          className=" transition relative flex duration-1000 ease-in-out h-full  w-full"
          style={{
            transform: `translateX(${index * 100}%)`,
          }}
        >
          <div className=" min-w-full h-full fixed bg-gray-700  inset-x-0 left-0  opacity-60"></div>
          <div className="min-w-full h-full  relative text-black ">
            <DionysusRules />
          </div>
          {FestivalObj && <FestivalDetails />}
        </div>
      </div>
    </div>
  );
}
