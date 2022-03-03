async function insert(id, data) {
    await db.query(sql`
      INSERT INTO Company (id, name, description, born, nit)
        VALUES (${id}, ${data.name}, ${data.description}, ${data.born}, ${data.nit})
      ON CONFLICT (id) DO UPDATE
        SET value=excluded.value;
    `);
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