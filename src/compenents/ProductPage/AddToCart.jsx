import { useDispatch, useSelector } from "react-redux";
import { addItem, increament } from "../../actions";

function AddToCartRe(props) {
  const dispatchItem = useDispatch();
  const dispatchCart = useDispatch();
  const count = useSelector((state) => state.count);
  const items = useSelector((state) => state.itemHandler);
  const item = props.data;
  return (
    <div>
      <div
        className="bg-red-800 pb-2 text-white cursor-pointer hover:bg-yellow-500 hover:text-gray-900"
        onClick={(e) => {
          console.log(items);
          item["quan"] = Number(props.quan);
          localStorage.setItem("quan", Number(count) + Number(props.quan));
          localStorage.setItem("items", JSON.stringify(items.concat(item)));
          dispatchItem(addItem(props.data));
          dispatchCart(increament(props.quan));
        }}
      >
        <span>Add to cart</span>
      </div>
    </div>
  );
}

export default AddToCartRe;
