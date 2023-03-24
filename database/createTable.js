const { User, Poll } = require('../src/models');


async function createTables() {
  await User.sync();
  await Poll.sync();
}


createTables();


