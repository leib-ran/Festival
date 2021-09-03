function emailValidation(value, pattern) {
  if (pattern.test(value)) {
    return true;
  }
  return false;
}

function isEmailValid(value) {
  let pattern = /^[a-z]{2}[\w]{0,15}@[\w]{0,5}[.][\w]{2,5}$/gi;
  return emailValidation(value, pattern);
}

function alphaValid(value) {
  let pattern = /^[a-z]*$/i;
  return emailValidation(value, pattern);
}

function isAddressValid(value) {
  let pattern = /[a-z]{2,20}/gi;
  return emailValidation(value, pattern);
}
function maxTwenty(value) {
  if (value.length < 20) {
    return true;
  }
  return false;
}
function minTwo(value) {
  if (value.length != 1) {
    return true;
  }
  return false;
}

let validationFuncs = {
  alpha: alphaValid,
  maxTwenty: maxTwenty,
  minTwo: minTwo,
};

export default validationFuncs;
