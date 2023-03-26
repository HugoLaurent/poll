const { User, Poll, Category } = require('../src/models');



async function createTables() {
  await User.sync();
  await Poll.sync();
  await Category.sync();
}


createTables();


