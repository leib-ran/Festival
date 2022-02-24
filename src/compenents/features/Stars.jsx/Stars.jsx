import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default function Stars(props) {
  const stars = [];
  const solidStarsNumber = Math.floor(props.rank);
  const reminder = getReminder(props.rank);

  fillStars(solidStarsNumber, GetFullStar, stars);
  if (stars.length != 5) {
    stars.push(reminderHandler(reminder));
  }
  fillStars(5 - stars.length, GetEmptyStar, stars);
  return stars;
}

function fillStars(iterNumber, funcStar, starsArr) {
  let index = 0;
  while (index < iterNumber) {
    starsArr.push(funcStar());
    ++index;
  }
}

function generateRandomKey() {
  const randomNum = Math.floor(Math.random() * 1000000);
  return randomNum;
}

function GetStar(paint, icon) {
  return (
    <FontAwesomeIcon
      key={generateRandomKey()}
      className={`text-${paint}-500`}
      icon={faStar}
    />
  );
}

function GetFullStar() {
  return GetStar("yellow", faStar);
}

function GetHalfStar() {
  return GetStar("yellow", faStarHalf);
}

function GetEmptyStar() {
  return GetStar("gray", faStar);
}

function reminderHandler(reminder) {
  if (reminder <= 0.25) {
    return GetEmptyStar();
  } else if (reminder <= 0.75) {
    return GetHalfStar();
  } else {
    return GetFullStar();
  }
}

function getReminder(rank) {
  return rank % 1;
}
