import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setQuantity, updateItem, updateUser } from "../../actions";
import {
  getItemsStorageParsed,
  getQuanStorageParsed,
} from "../../helper/config";
import Avatar from "./Avatar";
import { UserDetailsLeft } from "./Details";
import { FormUserDetail } from "./FormUserDetail";

export function ProfilePage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.userGlobalState);
  return (
    <div>
      <button
        className="border-2 text-white bg-blue-500 p-2 font-bold float-right border-black"
        onClick={() => {
          let items = [];
          let quan = 0;
          dispatch(updateUser({}));
          swapStorages("temp", "items");
          swapStorages("tempquan", "quan");
          items = getItemsStorageParsed();
          quan = getQuanStorageParsed() || 0;
          dispatch(updateItem(items));
          dispatch(setQuantity(quan));
          history.push("/login");
        }}
      >
        Log Out
      </button>
      <div className="text-4xl font-medium font-serif"></div>
      <div className="">{user.src ? <img src="" alt="" /> : <Avatar />}</div>
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
