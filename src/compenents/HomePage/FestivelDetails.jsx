import { useSelector } from "react-redux";
import { BarChoice } from "./BarChoice";
import { FestivalGallery } from "./FestivalGallery";
import { FestivelSpec } from "./FestivelSpec";

export function FestivalDetails() {
  const FestivalObj = useSelector((state) => state.festivalChosen);

  return (
    <div className="min-w-full h-full  ">
      <div className=" min-w-full h-full fixed bg-gray-700  inset-x-1 left-136  opacity-60"></div>
      <div className="relative  z-10 text-center w-full h-full text-4xl font-medium">
        <div>
          <BarChoice />
        </div>
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
          <div className=" text-sm flex flex-wrap  full justify-center">
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
                    <FestivelSpec name={element} value={FestivalObj[element]} />
                  </div>
                );
              })}
            <div className="text-sm w-7/12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
