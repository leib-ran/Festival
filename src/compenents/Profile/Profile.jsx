import { useDispatch, useSelector } from "react-redux";
import { setQuantity, updateItem, updateUser } from "../../actions";
import {
  getItemsStorageParsed,
  getQuanStorageParsed,
} from "../../helper/config";
import { UserDetailsLeft } from "./Details";
import { FormUserDetail } from "./FormUserDetail";

export function Profile(props) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userGlobalState);
  return (
    <div>
      <div className="text-4xl">welcome {user.firstName}</div>
      <button
        className="border-2 border-black"
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
          props.history.push("/login");
        }}
      >
        Log Out
      </button>
      <div className="flex">
        <UserDetailsLeft />
        <FormUserDetail />
      </div>
    </div>
  );
}

function swapStorages(firstStorage, secondStorage) {
  const items = localStorage.getItem(firstStorage) || [];
  localStorage.setItem(secondStorage, items);
  localStorage.removeItem(firstStorage);
}
