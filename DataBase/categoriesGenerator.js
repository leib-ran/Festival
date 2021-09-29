const faker = require("faker");
const { getRandomId } = require("./helpers");

const transporationId = "transporation";
const exhibtsId = "exhibts";
const clothingId = "clothing";
const camping = "camping";

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
  ];
  return subCategoris;
};

function categoriesGenerator() {
  const categories = [
    {
      title: "transporation",
      id: transporationId,
      icon: "plane",
      image: "/images/categories/Flight.jpg",
    },
    {
      title: "exhibts",
      id: exhibtsId,
      icon: "rocket",
      image: "/images/links/technodrom.jpg",
    },
    {
      title: "clothing",
      id: clothingId,
      icon: "shirt",
      image: "/images/categories/clothing.jpg",
    },

    {
      title: "camping",
      id: camping,
      icon: "tent",
      image:
        "/images/categories/Northern_Nights_Music_Festival_2015_Lights_in_the_Trees_Conner_Coughenour-3.jpg",
    },
  ];

  return categories;
}

module.exports = { categoriesGenerator, subCategoryGenrator };
