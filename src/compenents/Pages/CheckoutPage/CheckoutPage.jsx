import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { isLogin, updateUser } from "../../../actions";
import { getUrlDataBase, isObjectEmpty } from "../../../helper/config";
import { getUser } from "../../../helper/userTools";
import { AccountTotal } from "./AccountTotal";
import { CostomerDetails } from "../../features/userDetails/CostomerDetails";
import { ItemsArea } from "./ItemsArea";
import { PaymentArea } from "./PaymentArea";
import { ShippingDetails } from "../../features/shippingDetails/ShippingDetails";
import { ShippingDetailsEdit } from "../../features/shippingDetails/ShippingDetailsEdit";
import { UsersApi } from "../../../core/http/users";

export function CheckoutPage(props) {
  const [user, setUser] = useState(null);
  const [isShippingDetails, setShippingDetails] = useState(false);
  const isEdit = useSelector((state) => state.isEditShipping);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(async () => {
    try {
      const res = await UsersApi.getUser();
      setShippingDetails(res.data.shippingDetails);
      await dispatch(updateUser(res.data));
    } catch {
      dispatch(isLogin(false));
      history.push("/login");
    }
  }, []);

  return (
    <div>
      {true && (
        <div>
          <div className=" mt-10 flex">
            <div className="w-128 ml-8"></div>
            <div className=" shadow-lg w-120">
              {isShippingDetails && !isEdit ? (
                <ShippingDetails />
              ) : (
                <ShippingDetailsEdit />
              )}
            </div>
            <div className="shadow-lg w-128">
              <ItemsArea></ItemsArea>
            </div>
          </div>
          <div className="flex mt-8">
            <div className="w-128 ml-8"></div>
            <div className=" ">
              <PaymentArea />
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
