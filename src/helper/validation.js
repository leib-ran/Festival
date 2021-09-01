function emailValidation(value, pattern) {
  if (pattern.test(value)) {
    return true;
  }
  return false;
}

export function isEmailValid(value) {
  let pattern = /^[a-z]{2}[\w]{0,15}@[\w]{0,5}[.][\w]{2,5}$/gi;
  return emailValidation(value, pattern);
}

export function isNameValid(value) {
  let pattern = /^[a-z]{2,10}\s$/gi;
  return emailValidation(value, pattern);
}

export function isAddressValid(value) {
  let pattern = /[a-z]{2,10}/gi;
  return emailValidation(value, pattern);
}
