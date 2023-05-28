# API_CRUD
API CRUD NodeJs/ExpressJS
## Introduction
Cette API fournit des fonctionnalités CRUD (Create, Read, Update, Delete) pour gérer les utilisateurs dans une base de données MySQL.

## Prérequis
Installez les modules necessaires:
### Express: npm install express
### Mysql: npm install mysql
### Readline: npm install readline

### Connexion base de donnee
Assurez vous de correctement configurer le fichier "database.js" comme suis:


const connection = mysql.createConnection({


    host: 'localhost',
    
    
    user: 'nomUtilisateurDeVotreBD',
    
    
    password: 'motDePasseDeVotreBD',
    
    
    database: 'nomDeVotreBD'
    
    
});

## Base URL
http://localhost:2000/api

## Routes
GET /users
Récupère la liste de tous les utilisateurs.

## Paramètres de requête
Aucun.

## Réponses
200 OK : Liste des utilisateurs récupérée avec succès.
[
  {
    "id": 1,
    "nom": "John Doe",
    "email": "johndoe@example.com"
  },
  {
    "id": 2,
    "nom": "Jane Smith",
    "email": "janesmith@example.com"
  },
  ...
]

500 Internal Server Error : Erreur lors de la récupération des utilisateurs.
GET /users/:id
Récupère les informations d'un utilisateur spécifique.

## Paramètres de requête
id (obligatoire) : ID de l'utilisateur.
## Réponses
200 OK : Informations de l'utilisateur récupérées avec succès.
{
  "id": 1,
  "nom": "John Doe",
  "email": "johndoe@example.com"
}

404 Not Found : Utilisateur non trouvé.

500 Internal Server Error : Erreur lors de la récupération des informations de l'utilisateur.

POST /users
Crée un nouvel utilisateur.

## Corps de la requête
{
  "nom": "John Doe",
  "email": "johndoe@example.com"
}

## Réponses
201 Created : Utilisateur créé avec succès.
{
  "id": 1,
  "nom": "John Doe",
  "email": "johndoe@example.com"
}

400 Bad Request : Données de requête invalides.

500 Internal Server Error : Erreur lors de la création de l'utilisateur.

PUT /users/:id
Met à jour les informations d'un utilisateur existant.

Paramètres de requête
id (obligatoire) : ID de l'utilisateur à mettre à jour.
## Corps de la requête
{
  "nom": "John Smith",
  "email": "johnsmith@example.com"
}

## Réponses
200 OK : Utilisateur mis à jour avec succès.
{
  "id": 1,
  "nom": "John Smith",
  "email": "johnsmith@example.com"
}

404 Not Found : Utilisateur non trouvé.

500 Internal Server Error : Erreur lors de la mise à jour de l'utilisateur.

DELETE /users/:id
Supprime un utilisateur.

## Paramètres de requête
id (obligatoire) : ID de l'utilisateur à supprimer.
Réponses
200 OK : Utilisateur supprimé avec succès.

404 Not Found : Utilisateur non trouvé.

500 Internal Server Error : Erreur lors de la suppression de l'utilisateur.

## Erreurs communes
404 Not Found : Ressource non trouvée.

500 Internal Server Error : Erreur interne du serveur.

Ceci conclut la documentation de l'API CRUD. Utilisez les différentes routes et méthodes HTTP pour gérer les utilisateurs dans la base de données.

