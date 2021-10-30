import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { slideFestivalModalMain } from "../../actions";
import DionysusRules from "./DionysusRules";
import { FestivalGallery } from "./FestivalGallery";
import { FestivelSpec } from "./FestivelSpec";
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
          {FestivalObj && (
            <div className="min-w-full h-full  ">
              <div className=" min-w-full h-full fixed bg-gray-700  inset-x-1 left-136  opacity-60"></div>
              <div className="relative  z-10 text-center w-full h-full text-4xl font-medium">
                {FestivalObj.title}
                <div className="object-cover min-h-60 flex">
                  <div>
                    <div>
                      <img
                        src={FestivalObj.logo}
                        alt="fd"
                        className=" w-96 bg-white h-56"
                      />
                    </div>
                    <div className="w-96 h-56">
                      <FestivalGallery images={FestivalObj["gallery"]} />
                    </div>
                  </div>
                  <div className=" text-sm flex flex-wrap  justify-center">
                    {Object.keys(FestivalObj)
                      .filter((element) => {
                        return [
                          "date",
                          "price",
                          "country",
                          "ticketPrice",
                          "Days",
                        ].includes(element);
                      })
                      .map((element) => {
                        return (
                          <div
                            key={element}
                            className="text-blue-800 w-1/2 m-2  font-bold"
                          >
                            <FestivelSpec
                              name={element}
                              value={FestivalObj[element]}
                            />
                          </div>
                        );
                      })}
                    <div className="text-sm w-7/12"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
