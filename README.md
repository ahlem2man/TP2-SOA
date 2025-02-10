# TP2-SOA
## Description
Ce projet est un exemple d'implémentation d'une API RESTful avec Node.js, SQLite, et une sécurisation via Keycloak.

## Objectifs
L'objectif de ce projet était de créer une API permettant de gérer des personnes et d'ajouter un mécanisme d'authentification via OAuth 2.0 avec Keycloak.

## Compte Rendu

### Étape 1 : Mise en place de l'environnement
- Installation de Node.js, SQLite et Keycloak pour la gestion des utilisateurs et de l'authentification.
- Configuration de la base de données SQLite avec une table `personnes` comportant un champ `adresse`.

### Étape 2 : Création de l'API
- Mise en place des routes RESTful pour gérer les personnes (`GET`, `POST`, `PUT`, `DELETE`).
- Test de l'API via Postman pour s'assurer que toutes les routes fonctionnent correctement.
