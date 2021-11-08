import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function UserDetailsLeft() {
  const user = useSelector((state) => state.userGlobalState);
  return (
    <div>
      <div className="w-16 bg-gray-900 h-96  shadow-2xl text-white">
        <div className="h-8 flex content-center flex-col justify-center text-center">
          <div className="m-auto">
            <FontAwesomeIcon icon={faHome} />
          </div>
        </div>
        <div className="h-8 flex content-center flex-col justify-center text-center">
          <div className="m-auto">
            <FontAwesomeIcon icon={faHome} />
          </div>
        </div>
        <div className="h-8 flex content-center flex-col justify-center text-center">
          <div className="m-auto">
            <FontAwesomeIcon icon={faHome} />
          </div>
        </div>
      </div>
    </div>
  );
}
