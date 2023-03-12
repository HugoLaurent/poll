const database = require('./database');

const dataMapper = {
  async getAllPoll() {
    const query = "SELECT * FROM poll LIMIT 4";
    const result = await database.query(query);
    return result.rows;
  },
};


module.exports = dataMapper;