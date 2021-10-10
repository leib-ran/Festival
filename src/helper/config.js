export const getStorageItemName = () => {
  return "items";
};

export const getStorageQuantityName = () => {
  return "quan";
};

//items
export const getQuantityKeyNameForItems = () => {
  return "quan";
};

export const getTitleFromItems = () => {
  return "title";
};

export const getIdName = () => {
  return "id";
};
export const getIdcategoryName = () => {
  return "categoryid";
};

export const getUrlDataBase = () => {
  return "http://localhost:8000";
};
export const getUrlproducts = () => {
  return getUrlDataBase() + "/products";
};

export const getItemsStorage = () => {
  const localStorageName = getStorageItemName();
  return localStorage.getItem(localStorageName) || "[]";
};

export const getItemDescrpitionName = () => {
  return "productDescription";
};

export const getstokeQuantity = () => {
  return "stokeQuantity";
};

export const getItemsStorageParsed = () => {
  return JSON.parse(getItemsStorage());
};

export const getQuantityFromStorage = () => {
  const localStorageName = getStorageQuantityName();
  return localStorage.getItem(localStorageName) || 0;
};

export const setQuantityFromStorage = (quantity) => {
  localStorage.setItem(getStorageQuantityName(), quantity);
};
export const setItemsStorage = (items) => {
  localStorage.setItem(getStorageItemName(), JSON.stringify(items));
};

export const getStorage = (storageName) => {
  return localStorage.getItem(storageName);
};

export const changeQuantityOfItemFromItemsArray = (currItem, newQuantaty) => {
  const items = getItemsStorageParsed();
  const id = getIdName();
  for (const item of items) {
    if (item[id] == currItem[id]) {
      item[getQuantityKeyNameForItems()] = Number(newQuantaty);
      return items;
    }
  }
  currItem[getQuantityKeyNameForItems()] = Number(newQuantaty);
  return items.concat(currItem);
};

//cart
export const addOne = (number) => {
  return Number(number) + 1;
};

export const addOneWithlimit = (number, limit) => {
  return Number(number) === limit ? limit : addOne(number);
};

export const subOne = (number) => {
  return Number(number) == 0 ? 0 : Number(number) - 1;
};

export const isPatternFound = (searchWord, string) => {
  const pattern = new RegExp(searchWord, "gi");
  return pattern.test(string);
};

export const removeSearch = (wordToRemove, string) => {
  return isPatternFound(wordToRemove, string)
    ? string.replace(wordToRemove, "")
    : string;
};
export const addWord = (text, string) => {
  return `${text} ${string}`;
};

export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length == 0;
};
