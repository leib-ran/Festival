import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { pageNumberGlobal } from "../../../actions";
import {
  getQueryValue,
  getUpdatedUrl,
  pushTheUpdatedUrl,
  urlHandle,
} from "../../../helper/catalogHandlers";
import {
  productPerPage,
  totalNumberitems,
} from "../../../helper/databaseKeyName";

function PagesButton(props) {
  const history = useHistory();
  const totlaPages = Math.round(props.amountOfItems / 9);
  const currentPage = getQueryValue(props.props, "_page") || 1;
  const pagesButton = [];
  fillPagesButton(pagesButton, currentPage - 1 || 1, Number(currentPage) + 1);
  return (
    <div className="text-center">
      {pagesButton.map((index) => (
        <button
          key={index}
          className="w-16 h-16 hover:bg-blue-300 hover:text-white border-black border-2 text-center rounded-medium"
          onClick={() => {
            pushTheUpdatedUrl(props.props, [{ _page: index }]);
          }}
        >
          {index}
        </button>
      ))}

      <div>{props.amountOfItems} total items</div>
    </div>
  );
}

function fillPagesButton(pagesButton, index, limit) {
  for (index; index <= limit; index++) {
    pagesButton.push(index);
  }
}

export default PagesButton;
