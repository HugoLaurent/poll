INSERT INTO "user"( "pseudo", "firstname", "lastname", "email", "password", "role") VALUES
( 'MikeRs', 'Michael', 'Dutheil', 'mike@oclock.io', '123456', 'member'),
( 'DevConte', 'romain', 'leconte', 'dev@oclock.io', '123456', 'member');

INSERT INTO "poll"("id", "title", "question", "choice_a", "choice_b", "user_id") VALUES 
( 'Oclock', 'Vous voulez vos tasses?', 'Non', 'Non',  1),
( 'Systeme', 'Pc ou Mac?', 'PC', 'Mac', 1),
( 'Politique', 'Pour ou contre le 49.3 ?', 2),
( 'Je ne trouve pas', 'Une idée ?', 'Oui', 2);