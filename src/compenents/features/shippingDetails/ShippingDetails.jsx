import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { isEditShippingDetails } from "../../../actions";

export function ShippingDetails() {
  const promiseUser = useSelector((state) => state.userGlobalState);
  const [shippingDetails, setShippingDetails] = useState(null);

  const dispatch = useDispatch();

  const Click = () => {
    dispatch(isEditShippingDetails(true));
  };

  useEffect(async () => {
    try {
      const userDetails = await promiseUser;
      console.log(userDetails);
      setShippingDetails(userDetails.shippingDetails);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {shippingDetails && (
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
      )}
    </div>
  );
}
