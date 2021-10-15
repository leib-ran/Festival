import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions";
import { UserDetailsLeft } from "./Details";
import { FormUserDetail } from "./FormUserDetail";

export function Profile(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userGlobalState);
  console.log(user);
  return (
    <div>
      <div className="text-4xl">welcome {user.firstName}</div>
      <button
        className="border-2 border-black"
        onClick={() => {
          props.history.push("/login");
          dispatch(updateUser({}));
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
