import auth from "../../auth";
import { useRef } from "react";
import { facebookProvider, googleProvider } from "../../authMethod";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { GoogleButton } from "./GoogleButton";
import { FaceButton } from "./FaceButton";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { setQuantity, updateItem, updateUser } from "../../actions";
import axios from "axios";
import {
  getQuantityKeyNameForItems,
  getQuantityTempKeyNameForItems,
  UserLocalStorage,
} from "../../helper/config";
export default function LogIn(props) {
  const email = useRef(null);
  const passward = useRef(null);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handelOnClick = async (provider) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        dispatch(updateUser(res.user));
        return res.user;
      });
  };

  return (
    <div>
      <div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            const user = auth.login(
              email.current.value,
              passward.current.value
            );
            axios
              .post(`http://localhost:8000/users/login`, {
                userEmail: email.current.value,
              })
              .then((res) => {
                const userQuan = res.data.user.quanItems;
                dispatch(updateUser(res.data.user));
                SwapQuantity(userQuan);
                dispatch(setQuantity(userQuan));
                dispatch(updateItem(res.data.user.items));
                UserLocalStorage(res.data.user.items);
              })
              .catch((err) => console.log(err.response.data));
          }}
        >
          <div className="text-red-400 h-4"> {error}</div>
          <div className="flex justify-center pt-20 mb-2 ">
            <input
              ref={email}
              className="border-black h-10 pl-2 w-96 border-2 hover:border-blue-300"
              placeholder="Email Address"
            />
          </div>
          <div className="flex justify-center ">
            <input
              className="border-black  h-10 pl-2 w-96 border-2 hover:border-blue-300"
              placeholder="Passward"
              type="password"
              ref={passward}
            />
          </div>
          <button className="text-center w-40 block m-auto mt-2 bg-red-500 text-white p-2">
            Sign In
          </button>
        </form>
        <div className="m-auto w-full text-center">
          <div
            className="ml-auto mr-auto mt-2 cursor-pointer w-96"
            onClick={(e) => handelOnClick(googleProvider)}
          >
            <GoogleButton />
          </div>
          <button
            className="w-96 mt-2 relative text-white serif font-medium  bg-blue-500 hover:bg-blue-600 h-10"
            onClick={(e) => {
              e.preventDefault();
              handelOnClick(facebookProvider);
            }}
            version="3.1"
          >
            <FaceButton />
            <div className="text-center ml-16">Continue with facebook</div>
          </button>
        </div>
      </div>
    </div>
  );
}

function SwapQuantity(currquan) {
  const quan = localStorage.getItem(getQuantityKeyNameForItems()) || 0;
  localStorage.setItem(getQuantityTempKeyNameForItems(), quan);
  localStorage.setItem(getQuantityKeyNameForItems(), currquan || 0);
}
