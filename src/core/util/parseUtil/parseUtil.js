import { ContactSupportOutlined } from "@material-ui/icons";

export class ParseUtil {
  static getUrl() {
    return window.location.href;
  }

  static splitBySlash(str) {
    return str.split("/");
  }

  static getUrlWithoutQueryString(str) {
    return str.split("?")[0];
  }

  static getQueryString() {
    const url = this.getUrl();
    const queryString = url.split("?")[1] || "";
    return queryString;
  }

  static splitUrlByAndMark(queryString) {
    console.log(queryString);
    return queryString.split("&");
  }
  static splitUrlByEqualSign(queryString) {
    return queryString.split("=");
  }
  static getObj(queryString) {
    const obj = {};
    const array = this.splitUrlByAndMark(queryString);
    array.map((element) => {
      if (element) {
        const queryArray = this.splitUrlByEqualSign(element);
        obj[queryArray[0]] = queryArray[1];
      }
    });
    return obj;
  }

  static getParams() {
    const queryString = this.getQueryString();
    return this.getObj(queryString);
  }

  static updateQuerySearchToUrl(obj) {
    let querySearch = "?";
    Object.keys(obj).map((key) => {
      querySearch += `&${key}=${obj[key]}`;
    });
    return querySearch;
  }

  static setQueryObj(obj, key, value) {
    if (key && value) {
      obj[key] = value;
    }
  }

  static setTheObjs(obj, queryObj) {
    queryObj.map((element) => {
      this.setQueryObj(obj, Object.keys(element)[0], Object.values(element)[0]);
    });
  }

  static urlHandle() {
    const obj = this.getParams();
    this.setTheObjs(obj, [{ "": "" }]);
    const updateQuerySearch = this.updateQuerySearchToUrl(obj);
    return updateQuerySearch;
  }

  static getLastPath() {
    const url = this.getUrl();
    const urlWithout = this.getUrlWithoutQueryString(url);
    const paths = this.splitBySlash(urlWithout);
    return paths.slice(-1);
  }
}
