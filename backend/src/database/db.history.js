const db = require('./database');

exports.insert = (data, callback) => {
  db.get(`INSERT INTO History (date, quantity, title, totalPrice)
          VALUES (?, ?, ?, ?);`, [data.date, data.quantity, data.title, data.totalPrice], (err, rows) => {
              if(!err) {
                callback({error:false, data: rows});
              } else {
                callback({error: true, data:err});
              }
          });
}

  exports.get = (id, callback) => {
    db.get(`SELECT * FROM History WHERE id=${id};`, [], (err, rows) => {
      if(!err) {
        callback({error:false, data: rows});
      } else {
        callback({error: true, data:err});
      }
    });
  }
  
  exports.delete = (id, callback) => {
    db.get(`DELETE FROM History WHERE id=${id};`, [], (err, rows) => {
      if(!err) {
        callback({error:false});
      } else {
        callback({error: true});
      }
    })
  }

  exports.getAll = (callback) => {
    db.all(`
      SELECT * FROM History;
  `, [], (err, rows) => {
    if(!err) {
      callback({error: false, data: rows});
    } else {
      callback({error: true, data: err});
    }
  });
  }