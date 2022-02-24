const { getRandomTable } = require("./helpers");

const faker = require("faker");
const { data } = require("autoprefixer");
module.exports = function productsGenrator(numberIter, subcategory) {
  const products = [];
  for (let index = 0; index < numberIter; index++) {
    let product = {};
    product.id = index;
    const subcategoryRandom = getRandomTable(subcategory);
    product.subcategoryId = subcategoryRandom["id"];
    product.categoryId = subcategoryRandom["categoryid"];
    product.icon = subcategoryRandom["icon"];
    product.title = faker.commerce.productName();
    product.color = faker.commerce.color();
    product.department = faker.commerce.department();
    product.productName = faker.commerce.productName();
    product.price = faker.commerce.price();
    product.productAdjective = faker.commerce.productAdjective();
    product.productMaterial = faker.commerce.productMaterial();
    product.stokeQuantity = faker.datatype.number();
    product.productDescription = faker.commerce.productDescription();
    product.companyName = faker.company.companyName();
    product.rank = (Math.random() * 5).toFixed(2);
    product.imageUrl = faker.image.nightlife();
    product.galleryImages = [
      faker.image.city(),
      faker.image.fashion(),
      faker.image.nature(),
      faker.image.business(),
      faker.image.nightlife(),
      faker.image.people(),
    ];
    products.push(product);
  }
  return products;
};
