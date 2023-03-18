Setup Sequelize :

- Setup client ✅
- Crée les models ✅
- Crée les associations ✅
- Crée le index.js pour rendre dispo nos models a l'extérieur ✅
- Ajouter logique dans controller ✅
- Refacto Sequelize creation et pop table ✅
- Voir comment on va gérer la création en BDD maintenant 
- 


Setup Global :

- Router
- Middlewares
-
-


Setup SignUp :
- Render la page signUp (route get)
- Handle data du signup Form (recup data req.body) (router post)
  - Vérif les données
  - Hasher Mdp avec Bcrypt
  - Insert user dans la BDD (User.create)




Setup Auth :
- ajout express session et setup dans l'index
- Render login page (router get)
- handle data du login form (router post)
  - On récup données 
  - On vérifie que données sont bien présente
  - On récupère user via email/pseudo dans la bdd 
  - On compare le PW avec BDD (bcrypt.compare)
  - SI OK on rajoute dans req.session un userId par ex
- voir rajout persistance de la session avec package


      j'ai presque finis le coup téléphone
        
      oui tqt
      je fais liste des trus a faire en attendant
