const faker = require("faker");
const productsGenrator = require("./products");
const userGenerator = require("./users");
const orderGenrator = require("./order");
const clientGenerator = require("./clients");
const rolesGenerator = require("./role");
const {
  subCategoryGenrator,
  categoriesGenerator,
} = require("./categoriesGenerator");
const totalNumberitems = 200;
const productPerPage = 10;

module.exports = () => {
  const num = totalNumberitems;
  const data = {
    products: [],
    categories: [],
    users: [],
    subcategory: [],
    shipping: [],
    posts: [],
    comments: [],
    orders: [],
    clients: [],
    userRoles: [],
  };

  data.subcategory = subCategoryGenrator();
  data.categories = categoriesGenerator();
  data.products = productsGenrator(200, data.subcategory);
  data.orders = orderGenrator(100, data.products);
  data.userRoles = rolesGenerator();
  data.users = userGenerator(50, data.userRoles);
  data.clients = clientGenerator(25, data.users);

  return data;
};
