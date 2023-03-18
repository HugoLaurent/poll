const { User, Poll } = require('../src/models');


async function createTables() {
  await User.sync();
  await Poll.sync();
}

async function populateTables(){
  await User.bulkCreate([
    {pseudo:"MikeRS", firstname: "Michael", lastname:"Dutheil", email:"mike@oclock.io", password: "123456"},
    {pseudo:"Anais49", firstname: "Anais", lastname:"Oclock", email:"anais@oclock.io", password: "mug"},
    {pseudo:"Pacron", firstname: "Emmanuel", lastname:"Pacron", email:"emmanuel@oclock.io", password: "brigitte"}
  ]);
  await Poll.bulkCreate([
    {title: "O'clock",question: "Vous voulez vos mugs ?",choice_a: "Non",choice_b:"Non",result_a: 0, result_b:0, user_id: 2},
    {title: "Système",question: "Pc ou Mac?",choice_a: "PC",choice_b:"MAc",result_a: 0, result_b:0, user_id: 1},
    {title: "Politique",question: "Pour ou contre le 49.3",choice_a: "Oui",choice_b:"Oui",result_a: 0, result_b:0, user_id: 3},
    {title: "Politique",question: "Pour ou contre la réforme des retraites",choice_a: "Oui",choice_b:"Oui",result_a: 0, result_b:0, user_id: 3},
  ]);
  /* await User.create() */
  /*  await Poll.create() */
}



// createTables();

populateTables();