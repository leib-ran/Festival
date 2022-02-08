function isQuestionMark(url) {
  const pattern = /[?]/gi;
  return pattern.test(url);
}

function splitUrlByQuestionMark(url, part) {
  return url.split("?")[part];
}

function removeQueryStringUrl(url) {
  return splitUrlByQuestionMark(url, 0);
}
function GetQueryStringFromURL(url) {
  return splitUrlByQuestionMark(url, 1) || "";
}
function splitUrlByAndMark(queryString) {
  return queryString.split("&");
}
function splitUrlByEqualSign(queryString) {
  return queryString.split("=");
}
function getObj(queryString) {
  const obj = {};
  const array = splitUrlByAndMark(queryString);
  array.map((element) => {
    if (element) {
      const queryArray = splitUrlByEqualSign(element);
      obj[queryArray[0]] = queryArray[1];
    }
  });
  return obj;
}

function setQueryObj(obj, key, value) {
  if (key && value) {
    obj[key] = value;
  }
}
function updateQuerySearchToUrl(obj) {
  let querySearch = "?";
  Object.keys(obj).map((key) => {
    querySearch += `&${key}=${obj[key]}`;
  });
  return querySearch;
}

function setTheObjs(obj, queryObj) {
  queryObj.map((element) => {
    setQueryObj(obj, Object.keys(element)[0], Object.values(element)[0]);
  });
}

export function urlHandle(props) {
  const search = getSearchQueryByProps(props);
  const queryString = GetQueryStringFromURL(search);
  const obj = getObj(queryString);
  setTheObjs(obj, [{ "": "" }]);
  const updateQuerySearch = updateQuerySearchToUrl(obj);
  return updateQuerySearch;
}

function getSearchQueryByProps(props) {
  return props.location.search;
}

export function isQueryFound(props, query) {
  const pattern = new RegExp(query, "gi");
  const queryString = getSearchQueryByProps(props);
  return pattern.test(queryString);
}

export function getQueryValue(props, key) {
  const search = getSearchQueryByProps(props);
  const queryString = GetQueryStringFromURL(search);
  const obj = getObj(queryString);
  return obj[key];
}

export function getPathName(props) {
  return props.location.pathname;
}
export function pushTheUpdatedUrl(props, queryObj) {
  const queryString = urlHandle(props, queryObj);
  props.history.push(getUpdatedUrl(props, queryString));
}

export function getUpdatedUrl(props, queryString) {
  return getPathName(props) + queryString;
}
