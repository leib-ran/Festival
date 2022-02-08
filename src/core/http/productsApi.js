import axios from "axios";
import { urlProducts } from "../consts";
import { ParseUtil } from "../util/parseUtil/parseUtil";

export class ProductsApi {
  static async getProductsByCategory(queryString) {
    const subcategory = ParseUtil.getLastPath();
    return await axios(
      `${urlProducts}?categoryId=${subcategory}&${queryString}`
    );
  }

  static async getProducts(queryString) {
    console.log("ran");
    console.log(`${urlProducts}${queryString}`);
    return await axios(`${urlProducts}?${queryString}`);
  }
}
