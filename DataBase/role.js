const faker = require("faker");

module.exports = function rolesGenerator() {
  return [
    { id: 1, Name: "admin" },
    { id: 2, Name: "client" },
    { id: 3, Name: "user" },
  ];
};
