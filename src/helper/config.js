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

export const getQuantityTempKeyNameForItems = () => {
  return "tempquan";
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

export const getTempStorageName = () => {
  return "temp";
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

export const getQuanStorageParsed = () => {
  const localStorageName = getQuantityKeyNameForItems();
  return localStorage.getItem(localStorageName) || 0;
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

export function UserLocalStorage(newStorage) {
  const items = getItemsStorage();
  localStorage.setItem(getTempStorageName(), items);
  setItemsStorage(newStorage);
}

export const getStorage = (storageName) => {
  return localStorage.getItem(storageName);
};

export const getProductName = () => {
  return "product";
};

export const changeQuantityOfItemFromItemsArray = (currItem, newQuantaty) => {
  const items = getItemsStorageParsed();
  const product = getProductName();
  const id = getIdName();
  const quan = getQuantityKeyNameForItems();
  for (const item of items) {
    if (item[product][id] == currItem[id]) {
      item[quan] = Number(newQuantaty);
      return items;
    }
  }

  return items.concat({ product: currItem, quan: Number(newQuantaty) });
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
