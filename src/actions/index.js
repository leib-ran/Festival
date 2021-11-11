import {
  CATEGORYTYPE,
  EDITSHIPPINGDETAILS,
  FESTIVALINK,
  FESTIVALSHOW,
  FESTIVAWELCOMING,
  ISSIGNIN,
  ITEMCHECKOUT,
  MAPSTATE,
  PAGENUMBER,
  SETQUANTITY,
  SORTTYPE,
  SUBCATEGORYTYPE,
  UPDATEFESTIVAL,
  USER,
} from "./types";

export const increament = (quan) => {
  return {
    type: "INCREAMENT",
    payload: quan,
  };
};

export const decreament = (quan) => {
  return {
    type: "DECREAMENT",
    payload: quan,
  };
};

export const setQuantity = (quan) => {
  return {
    type: SETQUANTITY,
    payload: quan,
  };
};

export const addItem = (item) => {
  return {
    type: "ADDITEM",
    payload: item,
  };
};

export const removeItem = (index) => {
  return {
    type: "REMOVEITEM",
    payload: index,
  };
};

export const updateItem = (items) => {
  return {
    type: "UPDATEITEMS",
    payload: items,
  };
};

export const shortendHide = () => {
  return {
    type: "SHORTENDHEIGHt",
  };
};

export const extendHeight = () => {
  return {
    type: "EXTENDHEIGHT",
  };
};

export const shortendHideWidth = () => {
  return {
    type: "SHORTENDWIDTH",
  };
};

export const extendWidth = () => {
  return {
    type: "EXTENDWIDTH",
  };
};

export const pageNumberGlobal = (pageNumber) => {
  return {
    type: PAGENUMBER,
    payload: pageNumber,
  };
};

export const categoryName = (name) => {
  return {
    type: CATEGORYTYPE,
    payload: name,
  };
};

export const subCategoryName = (name) => {
  return {
    type: SUBCATEGORYTYPE,
    payload: name,
  };
};

export const sorttype = (name) => {
  return {
    type: SORTTYPE,
    payload: name,
  };
};

export const updatemap = (map) => {
  return {
    type: MAPSTATE,
    payload: map,
  };
};

export const slideFestivalModalHide = () => {
  return {
    type: FESTIVALINK,
  };
};
export const slideFestivalModalMain = () => {
  return {
    type: FESTIVAWELCOMING,
  };
};

export const slideFestivalModal = () => {
  return {
    type: FESTIVALSHOW,
  };
};

export const updateFestival = (festival) => {
  return {
    type: UPDATEFESTIVAL,
    payload: festival,
  };
};

export const updateUser = (user) => {
  return {
    type: USER,
    payload: user,
  };
};

export const updateSignInState = (boolValue) => {
  return {
    type: ISSIGNIN,
    payload: boolValue,
  };
};

export const updateItemCheckout = (item) => {
  return {
    type: ITEMCHECKOUT,
    payload: item,
  };
};

export const isEditShippingDetails = (bool) => {
  return {
    type: EDITSHIPPINGDETAILS,
    payload: bool,
  };
};
