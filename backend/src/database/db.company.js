async function insert(id, data) {
    await db.query(sql`
      INSERT INTO Company (id, name, description, born, nit)
        VALUES (${id}, ${data.name}, ${data.description}, ${data.born}, ${data.nit})
      ON CONFLICT (id) DO UPDATE
        SET value=excluded.value;
    `);
  }
  
  async function get(id) {
    const results = await db.query(sql`
      SELECT value FROM company WHERE id=${id};
    `);
    if (results.length) {
      return results[0].value;
    } else {
      return undefined;
    }
  }
  
  async function remove(id) {
    await prepared;
    await db.query(sql`
      DELETE FROM Company WHERE id=${id};
    `);
  }

  async function getAll() {
    const results = await db.query(sql`
    SELECT * FROM Company;
  `);
    if (results.length) {
        return results
    } else {
      return undefined;
    }
  }