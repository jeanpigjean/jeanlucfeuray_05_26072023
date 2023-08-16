/*
La page Confirmation
Sur cette page, l'utilisateur doit voir s’afficher son numéro de commande. Il faudra veiller à
ce que ce numéro ne soit stocké nulle part.

Le code source
Celui-ci devra être indenté et utiliser des commentaires en début de chaque fonction pour
décrire son rôle. Il devra également être découpé en plusieurs fonctions réutilisables
(nommées). Une fonction doit être courte et répondre à un besoin précis. Il ne faudrait pas
avoir de longues fonctions qui viendraient répondre à plusieurs besoins à la fois. Exemple : il
ne serait pas accepté de mettre une seule et unique fonction en place pour collecter, traiter
et envoyer des données.


Paramètres des API
Chaque API contient 3 paramètres :
Verbe Paramètre Corps de la demande
prévue
Réponse
GET / - Retourne un tableau de tous les
éléments
GET /{product-ID}
{product-ID}
doit être
remplacé par
l’id d’un produit
- Renvoie l'élément correspondant à
{product-ID}, identifiant d’un produit
POST /order Requête JSON contenant un
objet de contact et un
tableau de produits
Retourne l'objet contact, le tableau
produits et orderId (string)
Validation des données
Pour les routes POST, l’objet contact envoyé au serveur doit contenir les champs firstName,
lastName, address, city et email. Le tableau des produits envoyé au back-end doit être un
array de strings product-ID. Les types de ces champs et leur présence doivent être validés
avant l’envoi des données au serveur.

boucle for in démare automatiquement à zéro

const passengers = [
"Will Alexander",
"Sarah Kate'",
"Audrey Simon",
"Tao Perkington"
]

for (let i in passengers) {
   console.log("Embarquement du passager " + passengers[i]);
}










*/