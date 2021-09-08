import { useDispatch, useSelector } from "react-redux";
import { increament } from "../../actions";

function AddToCartRe(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className="bg-red-800 pb-2 text-white cursor-pointer hover:bg-yellow-500 hover:text-gray-900"
        onClick={(e) => {
          dispatch(increament(props.quan));
        }}
      >
        <span>Add to cart</span>
      </div>
    </div>
  );
}

export default AddToCartRe;
