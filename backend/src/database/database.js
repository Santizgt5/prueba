
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test.db');


db.run(`CREATE TABLE if not exists Company (
      id INTEGER PRIMARY KEY autoincrement,
      name VARCHAR NOT NULL,
      description VARCHAR NOT NULL,
      born DATE NOT NULL,
      nit VARCHAR NOT NULL
      );`
);

db.run(`CREATE TABLE if not exists Videogame (
    id INTEGER  PRIMARY KEY AUTOINCREMENT,
    title VARCHAR NOT NULL,
    stock INT NOT NULL,
    companyId INT NOT NULL,
    releaseDate DATE NOT NULL,
    platform VARCHAR NOT NULL,
    price DOUBLE NOT NULL,
    FOREIGN KEY (companyId) REFERENCES Company(id)
  );`)

  db.run(`CREATE TABLE if not exists History (
      id INTEGER  PRIMARY KEY AUTOINCREMENT,
      date DATE NOT NULL,
      quantity INT NOT NULL,
      title VARCHAR NOT NULL,
      totalPrice DOUBLE NOT NULL
  );`)

module.exports = db;

