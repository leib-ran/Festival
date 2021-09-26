const faker = require("faker");
const { randomIdFromTable } = require("./helpers");

module.exports = function clientGenerator(objNumber, userTable) {
  const clients = [];
  for (let index = 0; index < objNumber; index++) {
    const client = {};
    client.id = faker.datatype.uuid();
    client.UserId = randomIdFromTable(userTable, "id");
    clients.push(client);
  }
  return clients;
};
