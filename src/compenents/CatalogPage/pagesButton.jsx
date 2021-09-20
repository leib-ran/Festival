import { useDispatch } from "react-redux";
import { pageNumberGlobal } from "../../actions";
import { productPerPage, totalNumberitems } from "../../helper/databaseKeyName";

function PagesButton() {
  const dispatch = useDispatch();
  const totlaPages = Math.round(totalNumberitems / productPerPage);
  PagesButton = [];
  fillPagesButton(PagesButton, totlaPages);
  return (
    <div className="text-center">
      {PagesButton.map((index) => (
        <button
          className="w-16 h-16 hover:bg-blue-300 hover:text-white border-black border-2 text-center rounded-medium"
          onClick={() => dispatch(pageNumberGlobal(index))}
        >
          {index}
        </button>
      ))}
    </div>
  );
}

function fillPagesButton(PagesButton, totlaPages) {
  for (let index = 1; index <= totlaPages; index++) {
    PagesButton.push(index);
  }
}

export default PagesButton;
