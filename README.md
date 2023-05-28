# API_CRUD
API CRUD NodeJs/ExpressJS
## Introduction
Cette API fournit des fonctionnalités CRUD (Create, Read, Update, Delete) pour gérer les utilisateurs dans une base de données MySQL.

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
