const Page = function (name = "", path = "") {
  this.name = name;
  this.path = path;

  this.getName = function () {
    return this.name;
  };
  this.setName = function (newName) {
    this.name = newName;
  };

  this.getPath = function () {
    return this.path;
  };
  this.setPath = function (newPath) {
    this.path = newPath;
  };
};

export const login = new Page("Login", "/login");
export const store = new Page("Store", "/store");
export const productPage = new Page("Products", "/productPage/:id");
export const homePage = new Page("Home Page", "/");
export const blog = new Page("Blog", "/blog/:id");
export const about = new Page("About", "/About");
export const signUp = new Page("SignUp", "/signUp");
export const cart = new Page("Cart", "/cart");
export const checkout = new Page("Checkout", "/checkout");
export const admin = new Page("admin", "/admin/");
export const contact = new Page("Contact", "/contact");
export const category = new Page("Category", "/category/:id");
export const profile = new Page("Profile", "/profile");
export const search = new Page("search", "/search");
