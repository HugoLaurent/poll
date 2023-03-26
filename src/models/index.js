const User = require("./User");
const Poll = require("./Poll");
const Category = require("./Category");


User.hasMany(Poll, {
  foreignKey: "user_id",
  as: "poll"
});

Poll.belongsTo(User, {
  foreignKey: "user_id",
  as: "author"
});

/* Category.hasMany(Poll, {
  foreignKey: "poll_id",
  as: "category"
});

Poll.belongsTo(Category, {
  foreignKey: "poll_id",
  as: "category"
}); */


module.exports = { User, Poll, Category };