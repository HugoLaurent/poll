const { User, Poll, Category } = require('../src/models');

async function populateTables(){
  await User.bulkCreate([
    {pseudo:"MikeRs", firstname: "Michael", lastname:"Dutheil", email:"mike@oclock.io", password: "12345678", role:"admin"},
    {pseudo:"Anais49", firstname: "Anais", lastname:"Oclock", email:"anais@oclock.io", password: "12345678", role:"member"},
    {pseudo:"Pacron", firstname: "Emmanuel", lastname:"Pacron", email:"emmanuel@oclock.io", password: "12345678", role:"member"}
  ]);
  await Category.bulkCreate([
    {name:"Amour"},
    {name:"Argent"},
    {name:"Art"},
    {name:"Au quotidien"},
    {name:"Automobile"},
    {name:"Bricolage"},
    {name:"Cinéma"},
    {name:"Culture"},
    {name:"Écologie"},
    {name:"Espace"},
    {name:"Études"},
    {name:"Gastronomie"},
    {name:"Géographie"},
    {name:"Grammaire"},
    {name:"Humour"},
    {name:"Jardinage"},
    {name:"Jeux"},
    {name:"Marques"},
    {name:"Musique"},
    {name:"Nature"},
    {name:"Philosophie"},
    {name:"Politique"},
    {name:"Sciences"},
    {name:"Sexualité"},
    {name:"Sport"},
    {name:"Technologie"},
    {name:"Top"},
    {name:"Transport"},
    {name:"Travail"},
    {name:"Voyages"},
  ]);
  await Poll.bulkCreate([
    {question: "Vous voulez vos mugs ?",choice_a: "Non",choice_b:"Non",result_a: 0, result_b:0, user_id: 2, tag_id: 3},
    {question: "Pc ou Mac?",choice_a: "PC",choice_b:"MAc",result_a: 0, result_b:0, user_id: 1, tag_id: 2},
    {question: "Pour ou contre le 49.3",choice_a: "Oui",choice_b:"Oui",result_a: 0, result_b:0, user_id: 3,tag_id: 1},
    {question: "Pour ou contre la réforme des retraites",choice_a: "Oui",choice_b:"Oui",result_a: 0, result_b:0, user_id: 3, tag_id:1},
  ]);


}

populateTables();
