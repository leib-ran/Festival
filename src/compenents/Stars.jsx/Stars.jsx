import React from "react";
import { isFullStar, isHalfStar } from "../../helper/starsHandlers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

function GetPaintStar(state, paint) {
  return (
    <div>
      {" "}
      <FontAwesomeIcon icon={state} className={paint} />
    </div>
  );
}

function GetPartialArrStars(rankParsed, state, paint) {
  let index = 0;
  let stars = [];
  while (index < rankParsed) {
    stars.push(GetPaintStar(state, paint));
    index++;
  }
  return start;
}

function GetCompleteArrStars(state, rank) {
  let gray = "text-gray-400";
  let yellow = "text-yellow-400";
  let stars = [];
  let rankParsed = ParseInt(rank);

  stars = stars.concat(GetPartialArrStars(rankParsed, faStar, yellow));
}

export default function FillStars(props) {
  return <div></div>;
}
