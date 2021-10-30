import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import icons from "../../helper/iconsdictionary";

export function FestivalProduct() {
  const [data, setData] = useState([]);
  const [showCategory, setCategory] = useState(true);
  const [subCategry, setSubCategory] = useState({});
  const [dataDisplay, setDataDisplay] = useState([]);

  useEffect(async () => {
    const result = await axios("http://localhost:5000/categories");
    setData(result.data);
    setDataDisplay(result.data);
  }, []);

  return (
    <div className="w-96 h-96 relative">
      <div className=" w-full h-full bg-gray-500 opacity-60 absolute"></div>

      <div className="relative">
        <div className=" text-white text-4xl  text-center serif w-full text-center">
          {FestivalProductTitle()}
        </div>
        <div className="flex flex-wrap">
          {dataDisplay.map((category, index) => {
            return (
              <div
                key={index}
                className="w-1/2"
                onClick={() => {
                  setDataDisplay(category.subCategoris);
                }}
              >
                <div className="text-4xl text-center">
                  <FontAwesomeIcon
                    icon={icons[category["icon"]]}
                  ></FontAwesomeIcon>
                </div>
                <div className="text-center">{category.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FestivalProductTitle() {
  return "Festival ToDo List";
}
