const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize-client");


class Category extends Model {}

Category.init({
  name: {
    type: DataTypes.TEXT,
    allowNull:false
  }
}, {
  sequelize,
  tableName: "category"
});

module.exports = Category;
