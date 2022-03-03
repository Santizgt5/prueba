const db = require("./database");

async function insert(id, data) {
    await db.query(sql`
      INSERT INTO Videogame (id, title, stock, companyId, releaseDate, platform, price)
        VALUES (${id}, ${data.title}, ${data.stock}, ${data.companyId}, ${data.releaseDate}, ${data.platform}, ${data.price})
      ON CONFLICT (id) DO UPDATE
        SET value=excluded.value;
    `);
  }
  
  exports.get = (id, callback) => {
    db.get(`SELECT * FROM Videogame WHERE id=${id};`, [], (err, rows) => {
      console.log(rows)
      if(!err) {
        callback({error:false, data: rows});
      } else {
        callback({error: true, data:err});
      }
    });
  }
  
  exports.delete = (callback) => {
    db.all(`DELETE FROM Videogame WHERE id=${id};`, [], (err, rows) => {
      console.log(rows)
      if(!err) {
        callback({error:false, data: rows});
      } else {
        callback({error: true, data:err});
      }
    })
  }

  exports.getAll = (callback) => {
    db.all(`
      SELECT * FROM Videogame;
  `, [], (err, rows) => {
    if(!err) {
      callback({error: false, data: rows});
    } else {
      callback({error: true, data: err});
    }
  });
  }