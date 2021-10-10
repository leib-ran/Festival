import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions";

export function Profile(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userGlobalState);
  console.log(user);
  return (
    <div>
      <button
        className="border-2 border-black"
        onClick={() => {
          props.history.push("/login");
          dispatch(updateUser({}));
        }}
      >
        Log Out
      </button>
      <div></div>
      rna the one 1
    </div>
  );
}
