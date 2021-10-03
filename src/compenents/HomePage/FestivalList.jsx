import { useEffect, useState } from "react";
import { FestivelSpec } from "./FestivelSpec";

export function FestivalsList() {
  const [index, setIndex] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setIndex(0);
    }, 3000);
  }, []);
  return (
    <div>
      <div className="overflow-hidden h-min-96 w-136">
        <div
          className=" transition relative duration-1000 ease-in-out h-full p-2 w-full"
          style={{
            transform: `translateX(${index * 100}%)`,
          }}
        >
          <div className=" w-full h-full bg-gray-700  inset-x-0 left-0 fixed opacity-60"></div>
          <div className="relative z-10 text-center text-4xl dont-medium">
            Festival List
            <div className="object-cover min-h-60 flex">
              <div>
                <div>
                  <img
                    src="https://com-paylogic-shops-images.s3.amazonaws.com/merchant/7476f90efacb477c89044ea1f52ad20d/38e88b5a9dd4477eb6e17741351e3d14.png"
                    alt=""
                    className=" w-96 bg-white"
                  />
                </div>
                <img
                  src="https://media.resources.festicket.com/image/1594x896/smart/filters:quality(70)/www/photos/Tland2020_V1_VApgpAr.jpg"
                  alt="tommarland pic"
                  className="object-fill w-96"
                />
              </div>
              <div className=" text-sm flex flex-wrap  justify-center">
                {Object.keys(FestivalObj[0])
                  .filter((element) => {
                    return element != "description";
                  })
                  .map((element) => {
                    return (
                      <div className="text-blue-800 w-1/2 m-2  font-bold">
                        <FestivelSpec
                          key={element}
                          name={element}
                          value={FestivalObj[0][element]}
                        />
                      </div>
                    );
                  })}
                <div className="text-sm w-7/12">
                  {/* {FestivalObj[0]["description"]} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FestivalObj = [
  {
    date: "28-30/7/2022",
    price: "2000$",
    country: "Alpe d’ Huez (France)",
    ticketPrice: "480$",
    Days: 7,
    description:
      "After 2 years, Tomorrowland is BACK. The first Tomorrowland of 2022 will take place in the beautiful village and mountains of Alpe d’ Huez (France) from March 19 until 26. A magical gathering of the People of Tomorrow filled with skiing, snowboarding and the best electronic music. Enjoy a great winter holiday on an altitude of more than 2000 meters. Celebrate during the day at different ",
  },
];
