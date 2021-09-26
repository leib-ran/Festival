const { randomIdFromTable } = require("./helpers");

const faker = require("faker");
module.exports = function productsGenrator(numberIter, subcategory) {
  const products = [];
  for (let index = 0; index < numberIter; index++) {
    let product = {};
    product.id = index;
    product.subcategoryId = randomIdFromTable(subcategory, "id");
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
    ];
    products.push(product);
  }
  return products;
};
