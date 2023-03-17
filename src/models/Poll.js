const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize-client");

class Poll extends Model {}

Poll.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  question:{
    type: DataTypes.TEXT,
    allowNull: false
  },
  choice_a:{
    type: DataTypes.TEXT,
    allowNull: false
  },
  choice_b:{
    type: DataTypes.TEXT,
    allowNull: false
  },
  result_a:{
    type: DataTypes.TEXT,
    allowNull: false
  },
  result_b:{
    type: DataTypes.TEXT,
    allowNull: false
  }

}, {
  sequelize,
  tableName: "poll"
});

module.exports = Poll;
