import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { isLogin, setQuantity, updateItem, updateUser } from "../../actions";
import {
  getItemsStorageParsed,
  getQuanStorageParsed,
  getUrlDataBase,
} from "../../helper/config";
import Avatar from "./Avatar";
import { UserDetailsLeft } from "./Details";

export function ProfilePage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(async () => {
    try {
      const { data } = await axios.get(`${getUrlDataBase()}/users/user`, {
        withCredentials: true,
        credentials: "inculde",
      });
      setUser(data);
    } catch (err) {
      dispatch(isLogin(false));
      history.push("/login");
    }
  }, []);

  return (
    <div>
      <button
        className="border-2 text-white bg-blue-500 p-2 font-bold float-right border-black"
        onClick={async () => {
          let items = [];
          let quan = 0;
          dispatch(updateUser({}));
          dispatch(isLogin(false));
          swapStorages("temp", "items");
          swapStorages("tempquan", "quan");
          items = getItemsStorageParsed();
          quan = getQuanStorageParsed() || 0;
          dispatch(updateItem(items));
          dispatch(setQuantity(quan));
          const res = await axios(`${getUrlDataBase()}/users/logout`, {
            withCredentials: true,
            credentials: "include",
          });
          history.push("/login");
        }}
      >
        Log Out
      </button>
      <div className="text-4xl font-medium font-serif"></div>
      <div className="">
        {user?.src ? <img src="" alt="" /> : <Avatar user={user} />}
      </div>
      <div className="flex"></div>
      <UserDetailsLeft />
      <div className="flex">{/* <FormUserDetail /> */}</div>
    </div>
  );
}

function swapStorages(firstStorage, secondStorage) {
  const items = localStorage.getItem(firstStorage) || [];
  localStorage.setItem(secondStorage, items);
  localStorage.removeItem(firstStorage);
}
