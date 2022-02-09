import auth from "../../../auth";
import { useEffect, useRef } from "react";
import { facebookProvider, googleProvider } from "../../../authMethod";
import { useState } from "react";
import { GoogleButton } from "./GoogleButton";
import { FaceButton } from "./FaceButton";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { isLogin, setQuantity, updateItem, updateUser } from "../../../actions";
import axios from "axios";
import {
  getQuantityKeyNameForItems,
  getQuantityTempKeyNameForItems,
  getUrlDataBase,
  UserLocalStorage,
} from "../../../helper/config";

export default function LogIn(props) {
  const email = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState("");
  const [opacity, setOpacity] = useState(0);
  const dispatch = useDispatch();
  const [emailVal, setEmailVal] = useState("");
  const [passVal, setPassVal] = useState("");

  const handelOnClick = async (provider) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        dispatch(updateUser(res.user));
        return res.user;
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.login(email.current.value, password.current.value);
    try {
      const res = await axios.post(
        `http://localhost:8000/users/login`,
        {
          userEmail: email.current.value,
          password: password.current.value,
        },
        {
          withCredentials: true,
          credentials: "inculde",
        }
      );

      dispatch(updateUser(res.data.user));
      SwapQuantity(userQuan);
      const userQuan = res.data.user.quanItems;
      dispatch(setQuantity(userQuan));
      dispatch(updateItem(res.data.user.items));
      UserLocalStorage(res.data.user.items);
      dispatch(isLogin(true));
    } catch (err) {
      setEmailVal(email.current.value);
      setPassVal(password.current.value);
      setError("passward or userEmail are not correct");
    }
  };

  useEffect(() => {
    setOpacity(100);
    setTimeout(() => {
      return () => {
        setOpacity(0);
      };
    }, 15000);
  }, [emailVal, passVal]);

  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div
            className={`text-red-400 opacity-${opacity} transition ease-in-out duration-3000 w-full pt-20 text-center h-4`}
          >
            {error}
          </div>
          <div className="flex justify-center pt-8 mb-2 ">
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
              ref={password}
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
