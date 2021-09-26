const faker = require("faker");

const transporationId = faker.datatype.uuid();
const exhibtsId = faker.datatype.uuid();
const clothingId = faker.datatype.uuid();
const camping = faker.datatype.uuid();

class SubCategory {
  constructor(id, name, icon, categoryId) {
    this.id = id;
    this.categoryid = categoryId;
    this.name = name;
    this.icon = icon;
  }
}

const subCategoryGenrator = function () {
  const subCategoris = [
    new SubCategory("F1", "Flight Tickets", "plane", transporationId),
    new SubCategory("T1", "Caravan renting", "caravan", transporationId),
    new SubCategory("CR1", "Cruise renting", "cruise", transporationId),
    new SubCategory("C1", "Car renting", "car", transporationId),
    new SubCategory("Bus1", "Bus ticket", "bus", transporationId),
    new SubCategory("wo10", "wood", "wood", exhibtsId),
    new SubCategory("facilities", "facility", "rocket", exhibtsId),
    new SubCategory("TO1", "Top", "shirt", clothingId),
    new SubCategory("ha1", "hat", "hat", clothingId),
    new SubCategory("sho2", "shoes", "shoes", clothingId),
    new SubCategory("acc2", "accessories", "accessories", clothingId),
    new SubCategory("win2", "winter clothing", "winter", clothingId),
    new SubCategory("ten10", "Tents", "tent", camping),
    new SubCategory("slee2", "Sleeping bag", "sleepingbag", camping),
    new SubCategory("gen5", "Generator", "genrator", camping),
    new SubCategory("refregirator", "refrigraotr", "refrigraotr", camping),
    new SubCategory("refregirator", "refrigraotr", "refrigraotr", camping),
  ];
  return subCategoris;
};

function categoriesGenerator() {
  const categories = [
    {
      title: "transporation",
      id: faker.datatype.uuid(),
      icon: "plane",
    },
    {
      title: "exhibts",
      id: faker.datatype.uuid(),
      icon: "rocket",
    },
    {
      title: "clothing",
      id: faker.datatype.uuid(),
      icon: "shirt",
    },

    {
      title: "camping",
      id: faker.datatype.uuid(),
      icon: "tent",
    },
  ];

  return categories;
}

module.exports = { categoriesGenerator, subCategoryGenrator };
