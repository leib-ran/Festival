import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

export default function ToggelCategory(props) {
  return (
    <div className="text-right">
      <div>
        <div onClick={props.hideToggle} className="cursor-pointer ">
          <FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon>
          Sort & Filter
        </div>
      </div>
    </div>
  );
}
