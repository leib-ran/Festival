const faker = require("faker");
const totalNumberitems = 200;
const productPerPage = 10;

class SubCategory {
  constructor(id, name, icon) {
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
}

module.exports = () => {
  const num = totalNumberitems;
  const data = {
    products: [],
    categories: [],
    users: [],
    shipping: [],
    posts: [],
    comments: [],
    users: [],
  };

  const categories = [
    {
      title: "transporation",
      id: "Tranportion",
      icon: "plane",
      subCategoris: [
        new SubCategory("F1", "Flight Tickets", "plane"),
        new SubCategory("T1", "Caravan renting", "caravan"),
        new SubCategory("CR1", "Cruise renting", "cruise"),
        new SubCategory("C1", "Car renting", "car"),
        new SubCategory("Bus1", "Bus ticket", "bus"),
      ],
    },
    {
      title: "exhibts",
      id: "exhibts",
      icon: "rocket",
      subCategoris: [
        new SubCategory("wo10", "wood", "wood"),
        new SubCategory("facilities", "facility", "rocket"),
      ],
    },
    {
      title: "clothing",
      id: "clothing",
      icon: "shirt",
      subCategoris: [
        new SubCategory("TO1", "Top", "shirt"),
        new SubCategory("ha1", "hat", "hat"),
        new SubCategory("sho2", "shoes", "shoes"),
        new SubCategory("acc2", "accessories", "accessories"),
        new SubCategory("win2", "winter clothing", "winter"),
      ],
    },

    {
      title: "camping",
      id: "camping",
      icon: "tent",
      subCategoris: [
        new SubCategory("ten10", "Tents", "tent"),
        new SubCategory("slee2", "Sleeping bag", "sleepingbag"),
        new SubCategory("gen5", "Generator", "genrator"),
        new SubCategory("refregirator", "refrigraotr", "refrigraotr"),
        new SubCategory("refregirator", "refrigraotr", "refrigraotr"),
      ],
    },
  ];

  data.categories = categories;

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
    product.galleryImages = [
      faker.image.city(),
      faker.image.fashion(),
      faker.image.nature(),
    ];
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
