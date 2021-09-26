const faker = require("faker");
const { randomIdFromTable } = require("./helpers");

module.exports = function usersGenerator(itratorNumber, roleTable) {
  const users = [];
  for (let index = 0; index < itratorNumber; index++) {
    const user = {};
    user.id = faker.datatype.uuid();
    user.roleId = randomIdFromTable(roleTable, "id");
    user.firstName = faker.name.firstName();
    user.lastName = faker.name.lastName();
    user.gender = faker.name.gender();
    user.phoneNumber = faker.phone.phoneNumber();
    user.userImage = faker.image.avatar();
    user.useremail = faker.internet.email();
    users.push(user);
  }
  return users;
};
