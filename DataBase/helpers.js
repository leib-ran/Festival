function randomIdFromTable(table, idName) {
  const randomNum = Math.floor(Math.random() * table.length);

  return table[randomNum][idName];
}

module.exports = { randomIdFromTable };
