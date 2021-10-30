import Avatar from "./Avatar";
import { useSelector } from "react-redux";

export function UserDetailsLeft() {
  const user = useSelector((state) => state.userGlobalState);
  return (
    <div>
      <div className="w-96  text-center h-96  shadow-2xl	">
        {user.src ? <img src="" alt="" /> : <Avatar />}
      </div>
    </div>
  );
}
