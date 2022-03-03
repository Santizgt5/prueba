const db = require("./database");

exports.insert = (data, callback) => {
  db.get(`INSERT INTO Videogame (title, stock, companyId, releaseDate, platform, price)
          VALUES (?, ?, ?, ?, ?, ?);`, [data.title, data.stock, data.companyId, data.releaseDate, data.platform, data.price], (err, rows) => {
            console.log(rows);
              if(!err) {
                callback({error:false, data: rows});
              } else {
                callback({error: true, data:err});
              }
          });
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