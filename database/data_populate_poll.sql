INSERT INTO "user"("id", "pseudo", "firstname", "lastname", "email", "password") VALUES
(1, 'MikeRs', 'Michael', 'Dutheil', 'mike@oclock.io', '123456'),
(2, 'DevConte', 'romain', 'leconte', 'dev@oclock.io', '123456');

INSERT INTO "poll"("id", "title", "question", "choice_a", "choice_b", "result_a", "result_b", "user_id") VALUES 
(1, 'Oclock', 'Vous voulez vos tasses?', 'Non', 'Non', 50, 50, 1),
(2, 'Systeme', 'Pc ou Mac?', 'PC', 'Mac', 100, 0, 1),
(3, 'Politique', 'Pour ou contre le 49.3 ?', 'Oui', 'Non', 50, 50, 2),
(5, 'Je ne trouve pas', 'Une idée ?', 'Oui', 'Non', 24, 76, 2);