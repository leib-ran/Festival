import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { iconKey } from "../../helper/databaseKeyName";
import icons from "../../helper/iconsdictionary";

export default function CategoriesDisplay() {
  const [isLoading, setLoading] = useState(false);
  let [data, setData] = useState({});
  useEffect(async () => {
    const result = await axios("http://localhost:5000/categories");
    setData(result.data);
    setLoading(true);
  }, []);

  return (
    <div>
      {console.log(data)}
      {isLoading && (
        <div className="flex  justify-center">
          {data.map((element) => {
            return (
              <div className="text-9xl justify-center rounded-lg inline-flex items-center w-96 h-96 align-middle text-red-800 hover:bg-gray-400 cursor-pointer m-2 bg-gray-300 text-center">
                <div>
                  <FontAwesomeIcon
                    icon={icons[element[iconKey]]}
                  ></FontAwesomeIcon>
                  <div className=" text-xl">
                    <div>{element.title}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
