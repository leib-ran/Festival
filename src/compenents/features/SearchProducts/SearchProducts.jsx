import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import CategoryArea from "../../Pages/CatalogPage/CategoryArea";

export function SearchProducts() {
  const history = useHistory();
  return (
    <form className="flex mt-2" onSubmit={() => history.push("search")}>
      <input
        className=" h-8 w-40 ml-2 pl-2 rounded-l-md border-box"
        name="q"
        placeholder="Search for an item"
      />
      <button className=" h-8 border-box focus-none rounded-r-md bg-yellow-500 text-white p-1 font-bold">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}
