const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./maBaseDeDonnees.sqlite', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connecté à la base de données SQLite.');

        // Création de la table avec la nouvelle colonne adresse
        db.run(`CREATE TABLE IF NOT EXISTS personnes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            adresse TEXT 
        )`, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log("Table 'personnes' vérifiée avec la colonne 'adresse'.");
            }
        });
    }
});

module.exports = db;
