DROP TABLE IF EXISTS "poll";


CREATE TABLE IF NOT EXISTS "poll" (
  "id" INT PRIMARY KEY, -- UNIQUE et NOT NULL = PRIMARY KEY (clef primaire)
  "title" VARCHAR(128),
  "author" VARCHAR(255)
  "question" VARCHAR(255)
  "choice_a" VARCHAR(255)
  "choice_b" VARCHAR(255)
  "first_result" INT
  "second_result" INT
);

INSERT INTO "promo" ("id", "title", "author", "question", "choice_a", "choice_b", "first_result", "second_result") VALUES 
(1, "La guerre", "Mohamed Ali", "Pour ou contre la guerre ?", "Moyennement", "Pour", 66, 44),
(2, "L'amitié", "Donald J Trump", "Aimes tu l'amitié?", "Fake NEWS", "FAKE NEWS", 99, 1),
(3, "O'clock", "Anais", "Vous voulez vos tasses?", "Non", "Non", 50, 50),
(4, "Système", "Bills Gate", "Pc ou Mac?", "PC", "PC", 100, 0),
(5, "Je ne trouve pas", "d'idée", "Pour cette", "ligne", "voila", 24, 76),