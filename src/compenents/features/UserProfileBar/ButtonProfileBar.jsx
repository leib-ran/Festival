import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function ButtonProfileBar(props) {
  return (
    <div>
      <div className="m-auto pt-4 ">
        <FontAwesomeIcon icon={props.details.icon} />
      </div>
      <div>{props.details.name}</div>
    </div>
  );
}
