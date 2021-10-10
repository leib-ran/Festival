import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { login } from "../../helper/PathName";

export function UserButton() {
  return (
    <Link
      to={login.getPath()}
      className="bg-white  text-center block h-8 w-8 mt-2 mr-4 ml-2 text-xl rounded-full"
    >
      <FontAwesomeIcon icon={faUser} />
    </Link>
  );
}
