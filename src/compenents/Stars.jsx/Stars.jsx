import React from "react";
import { isFullStar, isHalfStar } from "../../helper/starsHandlers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default function Stars(props) {
  const stars = [];
  const solidStarsNumber = Math.floor(props.rank);
  const reminder = getReminder(props.rank);

  fillStars(solidStarsNumber, getFullStar, stars);
  if (stars.length != 5) {
    stars.push(reminderHandler(reminder));
  }
  fillStars(5 - stars.length, getEmptyStar, stars);
  return stars;
}

function fillStars(iterNumber, funcStar, starsArr) {
  let index = 0;
  while (index < iterNumber) {
    starsArr.push(funcStar());
    ++index;
  }
}

function getStar(paint, icon) {
  return <FontAwesomeIcon className={`text-${paint}-500`} icon={faStar} />;
}

function getFullStar() {
  console.log("yellow");
  return getStar("yellow", faStar);
}

function getHalfStar() {
  return getStar("yellow", faStarHalf);
}

function getEmptyStar() {
  return getStar("gray", faStar);
}

function reminderHandler(reminder) {
  if (reminder <= 0.25) {
    return getEmptyStar();
  } else if (reminder <= 0.75) {
    return getHalfStar();
  } else {
    return getFullStar();
  }
}

function getReminder(rank) {
  return rank % 1;
}
