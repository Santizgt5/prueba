const connect = require('@databases/sqlite');
const {sql} = require('@databases/sqlite');

const db = connect();

async function prepare() {
  await db.query(sql`
      CREATE TABLE Company (
          id VARCHAR NOT NULL PRIMARY KEY,
          name VARCHAR NOT NULL,
          description VARCHAR NOT NULL,
          born DATE NOT NULL,
          nit VARCHAR NOT NULL
      );
      CREATE TABLE Videogame (
        id VARCHAR NOT NULL PRIMARY KEY,
        title VARCHAR NOT NULL,
        stock VARCHAR NOT NULL,
        companyId INT NOT NULL,
        releaseDate DATE NOT NULL,
        platform VARCHAR NOT NULL,
        price DOUBLE NOT NULL,
        FOREIGN KEY (companyId) REFERENCES Company(id)
      );
      CREATE TABLE History (
          id VARCHAR NOT NULL PRIMARY KEY,
          date DATE NOT NULL,
          quantity INT NOT NULL,
          title VARCHAR NOT NULL,
          totalPrice DOUBLE NOT NULL
      );
    `);
}

prepare();
