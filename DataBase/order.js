const faker = require("faker");
const { randomIdFromTable } = require("./helpers");

module.exports = function orderGenrator(numbrePages, productTable) {
  const orders = [];
  const orderStatus = ["delivered", "ordered", "cancelled"];
  for (let index = 0; index < numbrePages; index++) {
    const order = {};
    order.id = faker.datatype.uuid();
    order.ProductID = randomIdFromTable(productTable, "id");
    order.date = faker.date.past();
    order.Address = faker.address.streetAddress();
    order.NbItem = faker.datatype.number();
    order.Total = faker.datatype.number();
    order.tax = 17;
    order.reference = faker.datatype.uuid();
    order.status = orderStatus[randmNumberInteger(2)];
    orders.push(order);
  }
  return orders;
};

function randmNumberInteger(num, theshhold = 0) {
  return Math.round(Math.random()) * num + theshhold;
}
