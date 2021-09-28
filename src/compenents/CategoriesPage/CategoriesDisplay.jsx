import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { categoryName, increament } from "../../actions";
import { getIdcategoryName } from "../../helper/config";
import { iconKey, imageKey } from "../../helper/databaseKeyName";
import icons from "../../helper/iconsdictionary";
import { categoryReducer } from "../../reducer/categoryReducer";
import CatlogPage from "../CatalogPage/CatlogPage";

export default function CategoriesDisplay(props) {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  let [data, setData] = useState({});
  useEffect(async () => {
    const result = await axios("http://localhost:5000/categories");
    setData(result.data);
    setLoading(true);
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="m-auto w-1/2">
          <div className="flex flex-wrap justify-center">
            {data.map((element) => {
              return (
                <Link
                  to={`/category/${element.title}`}
                  onClick={(e) => {
                    dispatch(categoryName(element["id"]));
                  }}
                >
                  <div className="text-2xl relative justify-center w-96 h-96 align-middle  cursor-pointer m-2 text-center">
                    <div className="relative text-left top-2 ">
                      <div className=" rounded-full absolute z-10 text-white right-2 bg-gray-800 opacity-75 text-lg w-12 h-12 text-center pt-2">
                        <FontAwesomeIcon
                          icon={icons[element[iconKey]]}
                          className=" rounded-full"
                        ></FontAwesomeIcon>
                      </div>

                      <img
                        src={element[imageKey]}
                        className="relative filter brightness-75 rounded-mediume"
                        onClick={(e) => {}}
                      />
                      <div className="text-2xl text-center font-serif font-bold">
                        <div>{element.title.toUpperCase()}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
