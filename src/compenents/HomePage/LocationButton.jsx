import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LocationButton(props) {
  return (
    <div className="w-40 ">
      <FontAwesomeIcon icon={props.icon} />
      <div>{props.continent}</div>
    </div>
  );
}
