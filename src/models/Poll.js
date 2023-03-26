const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize-client");
const Category = require("./Category");

class Poll extends Model {}

Poll.init({

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
    type: DataTypes.INTEGER,
    allowNull: false
  },
  result_b:{
    type: DataTypes.INTEGER,
    allowNull: false
  },


}, {
  sequelize,
  tableName: "poll"
});

module.exports = Poll;
