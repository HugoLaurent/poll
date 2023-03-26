const { User, Poll, Category } = require('../src/models');

async function populateTables(){
  await User.bulkCreate([
    {pseudo:"MikeRs", firstname: "Michael", lastname:"Dutheil", email:"mike@oclock.io", password: "12345678", role:"admin"},
    {pseudo:"Anais49", firstname: "Anais", lastname:"Oclock", email:"anais@oclock.io", password: "12345678", role:"member"},
    {pseudo:"Pacron", firstname: "Emmanuel", lastname:"Pacron", email:"emmanuel@oclock.io", password: "12345678", role:"member"}
  ]);
  await Poll.bulkCreate([
    {question: "Vous voulez vos mugs ?",choice_a: "Non",choice_b:"Non",result_a: 0, result_b:0, user_id: 2, tag_id: 3},
    {question: "Pc ou Mac?",choice_a: "PC",choice_b:"MAc",result_a: 0, result_b:0, user_id: 1, tag_id: 2},
    {question: "Pour ou contre le 49.3",choice_a: "Oui",choice_b:"Oui",result_a: 0, result_b:0, user_id: 3,tag_id: 1},
    {question: "Pour ou contre la réforme des retraites",choice_a: "Oui",choice_b:"Oui",result_a: 0, result_b:0, user_id: 3, tag_id:1},
  ]);
  await Category.bulkCreate([
    {name:"Politique"},
    {name:"Système"},
    {name:"O'clock"},
  ]);

}

populateTables();