const db = require("./database");


exports.insert = (data, callback) => {
  db.get(`INSERT INTO Company (name, description, born, nit)
          VALUES (?, ?, ?, ?);`, [data.name, data.description, data.born, data.nit], (err, rows) => {
            console.log(rows);
              if(!err) {
                callback({error:false, data: rows});
              } else {
                callback({error: true, data:err});
              }
          });
}

  exports.get = (id, callback) => {
    db.get(`SELECT * FROM Company WHERE id=${id};`, [], (err, rows) => {
      console.log(rows)
      if(!err) {
        callback({error:false, data: rows});
      } else {
        callback({error: true, data:err});
      }
    });
  }
  
  exports.delete = (callback) => {
    db.all(`DELETE FROM Company WHERE id=${id};`, [], (err, rows) => {
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
      SELECT * FROM Company;
  `, [], (err, rows) => {
    if(!err) {
      callback({error: false, data: rows});
    } else {
      callback({error: true, data: err});
    }
  });
  }