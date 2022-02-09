import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function FaceButton() {
  return (
    <FontAwesomeIcon
      className="text-white pb-2 text-2xl mr-4 text-white absolute left-2 top-3 "
      icon={faFacebook}
    />
  );
}
