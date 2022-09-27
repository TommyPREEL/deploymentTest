# Scénario

- Je suis un utilisateur qui arrive sur la page d'inscription,
  Je remplie le formulaire d'inscription,
  Le formulaire est correct,
  On me renvoie `true`

- Je suis un utilisateur qui arrive sur la page d'inscription,
  Je remplie le formulaire d'inscription,
  J'oublie le champs "Nom",
  Le formulaire est incorrect,
  On me renvoie `false` ainsi que le message d'erreur "Veuillez remplir le champs 'Nom'"

- Je suis un utilisateur qui arrive sur la page d'inscription,
  Je remplie le formulaire d'inscription,
  J'oublie le champs "Email",
  Le formulaire est incorrect,
  On me renvoie `false` ainsi que le message d'erreur "Veuillez remplir le champs 'Email'"

- Je suis un utilisateur qui arrive sur la page d'inscription,
  Je remplie le formulaire d'inscription,
  Le champs Email n'est pas remplie correctement,
  Le formulaire est incorrect,
  On me renvoie `false` ainsi que le message d'erreur "Veuillez remplir le champs 'Email' correctement"

- Je suis un utilisateur qui arrive sur la page d'inscription,
  Je remplie le formulaire d'inscription,
  Le champs "Age" est inférieur à 13 ans,
  Le formulaire est incorrect,
  On me renvoie `false` ainsi que le message d'erreur "Vous devez avoir plus de 13 ans pour vous inscrire"

- Je suis un utilisateur qui arrive sur la page d'inscription,
  Je remplie le formulaire d'inscription,
  Le champs "Age" est supérieur à 120 ans,
  Le formulaire est incorrect,
  On me renvoie `false` ainsi que le message d'erreur "Vous devez avoir moins de 120 ans pour vous inscrire"
