const faker = require("faker");

module.exports = () => {
  const categories = ["flight", "sleeping", "leds", "speakers"];
  const num = 200;
  const data = {
    products: [],
    categories: ["flight", "sleeping", "leds", "speakers"],
    users: [],
    categories: [],
    shipping: [],
    posts: [],
    comments: [],
    users: [],
  };

  for (let index = 0; index < num; index++) {
    let fakeUser = {};
    let name = {};

    fakeUser.id = index;

    let product = {};
    product.id = index;
    product.title = faker.commerce.productName();
    product.color = faker.commerce.color();
    product.department = faker.commerce.department();
    product.productName = faker.commerce.productName();
    product.price = faker.commerce.price();
    product.productAdjective = faker.commerce.productAdjective();
    product.productMaterial = faker.commerce.productMaterial();
    product.product = faker.commerce.product();
    product.productDescription = faker.commerce.productDescription();
    product.companyName = faker.company.companyName();
    product.rank = (Math.random() * 5).toFixed(2);
    product.imageUrl = faker.image.nightlife();
    data.products.push(product);

    user = {};
    uid = +(+index) * num;
    user.firstName = faker.name.firstName();
    user.lastName = faker.name.lastName();
    user.gender = faker.name.gender();
    user.phoneNumber = faker.phone.phoneNumber();
    userImage = faker.image.avatar();
    useremail = faker.internet.email();

    data.users.push(user);
  }
  return data;
};
