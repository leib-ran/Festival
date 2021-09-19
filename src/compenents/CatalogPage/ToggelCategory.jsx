import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { shortendHide } from "../../actions";

export default function ToggelCategory(props) {
  const dispatch = useDispatch();
  return (
    <div className="text-right">
      <div>
        <div
          onClick={() => {
            dispatch(shortendHide());
          }}
          className="cursor-pointer "
        >
          <FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon>
          {titleFilter()}
        </div>
      </div>
    </div>
  );
}

function titleFilter() {
  return "Sort & Filter";
}
