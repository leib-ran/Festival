import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { isEditShippingDetails } from "../../actions";

export function ShippingDetails() {
  const user = useSelector((state) => state.userGlobalState);
  const shippingDetails = user.shippingDetails;
  const dispatch = useDispatch();

  const Click = () => {
    dispatch(isEditShippingDetails(true));
  };

  return (
    <div>
      <div className="text-left font-bold">shipping details</div>
      <div>{`${shippingDetails.firstName} ${shippingDetails.lastName}`}</div>
      <div>
        {` ${shippingDetails.streetName} ${shippingDetails.houseNumber},${shippingDetails.city},${shippingDetails.country}`}
      </div>
      <button
        className="bg-blue-500 rounded-md w-16 h-8 text-white "
        onClick={Click}
      >
        Edit
      </button>
    </div>
  );
}
