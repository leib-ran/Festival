export class CartStorage {
  static getQuantity() {
    return localStorage.getItem("quan");
  }
}
