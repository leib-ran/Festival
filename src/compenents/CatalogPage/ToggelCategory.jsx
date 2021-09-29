import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { extendWidth, shortendHide } from "../../actions";
import { useState } from "react";
import ModalFilterSort from "./ModalFilterSort";
export default function ToggelCategory(props) {
  const [showTitle, setShowTitle] = useState(true);
  const dispatch = useDispatch();
  return (
    <div className="float-right overflow-hidden">
      <div className="text-right">
        <div>
          <div
            onClick={() => {
              setShowTitle(false);
              dispatch(extendWidth());
              dispatch(shortendHide());
            }}
            className="cursor-pointer "
          >
            <FontAwesomeIcon icon={faSlidersH}></FontAwesomeIcon>
            {titleFilter()}
          </div>
        </div>

        {<ModalFilterSort categoryName={props.categoryName} />}
      </div>
    </div>
  );
}

function titleFilter() {
  return "Sort & Filter";
}
