const User = require("./User");
const Poll = require("./Poll");


User.hasMany(Poll, {
    foreignKey: "user_id",
    as: "polls" 
  });

Poll.belongsTo(User, {
    foreignKey: "user_id",
    as: "author"
});

module.exports = { User, Poll };