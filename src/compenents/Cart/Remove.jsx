import { useDispatch, useSelector } from "react-redux";
import { decreament, removeItem } from "../../actions";

function Remove(props) {
  const dispatch = useDispatch();
  const quan = useSelector((state) => state.count);
  const items = useSelector((state) => state.itemHandler);
  return (
    <div
      className="bg-red-600 cursor-pointer w-36 h-8 font-bold text-center text-white"
      onClick={() => {
        localStorage.setItem(
          "quan",
          Number(quan) - Number(items[props.index]["quan"])
        );
        localStorage.setItem(
          "items",
          JSON.stringify(
            items.slice(0, props.index).concat(items.slice(props.index + 1))
          )
        );
        dispatch(decreament(items[props.index]["quan"]));
        dispatch(removeItem(props.index));
      }}
    >
      Remove
    </div>
  );
}

export default Remove;
