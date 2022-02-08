import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../../helper/iconsdictionary";

export function FestivelSpec(props) {
  return (
    <div className="min-w-1/3 san-serif h-16 bg-white rounded-md">
      <FontAwesomeIcon icon={icons[props.name]} />
      <div>{props.name.toUpperCase()}</div>
      <div>{props.value}</div>
    </div>
  );
}
