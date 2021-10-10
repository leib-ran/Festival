import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { categoryName } from "../../actions";
import { iconKey, imageKey } from "../../helper/databaseKeyName";
import icons from "../../helper/iconsdictionary";
import CategorySymbol from "../CategorySymbol/CategorySymbol";

export default function CategoriesDisplay(props) {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  let [data, setData] = useState({});
  useEffect(async () => {
    const result = await axios("http://localhost:8000/categories");
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
                      <CategorySymbol icon={icons[element[iconKey]]} />

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
