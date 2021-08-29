function getReminder(rank) {
  return rank % 10;
}

function isHalfStarOrCompletness(rank, completnes) {
  let reminder = getReminder(rank);
  let distanseFromHalf = Math.abs(reminder - completnes);
  return distanseFromHalf <= 2.5;
}

export function isFullStar(rank) {
  return isHalfStarOrCompletness(rank, 1);
}

export function isHalfStar(rank) {
  return isHalfStarOrCompletness(rank);
}
