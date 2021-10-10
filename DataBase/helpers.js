const faker = require("faker");

function randomIdFromTable(table, idName) {
  return getRandomTable(table)[idName];
}

function getRandomTable(table) {
  const randomNum = Math.floor(Math.random() * table.length);
  return table[randomNum];
}

function getRandomId() {
  const randomId = String(faker.datatype.uuid()).replace("-", "").substr(0, 6);
  return randomId;
}

module.exports = { randomIdFromTable, getRandomTable, getRandomId };
