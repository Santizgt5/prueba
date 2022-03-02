async function insert(id, data) {
    await db.query(sql`
      INSERT INTO History (id, date, quantity, title, totalPrice)
        VALUES (${id}, ${data.date}, ${data.quantity}, ${data.title}, ${data.totalPrice})
      ON CONFLICT (id) DO UPDATE
        SET value=excluded.value;
    `);
  }
  async function get(id) {
    const results = await db.query(sql`
      SELECT value FROM History WHERE id=${id};
    `);
    if (results.length) {
      return results[0].value;
    } else {
      return undefined;
    }
  }
  
  async function remove(id) {
    await db.query(sql`
      DELETE FROM History WHERE id=${id};
    `);
  }

  async function getAll() {
    const results = await db.query(sql`
    SELECT * FROM History;
  `);
    if (results.length) {
        return results
    } else {
      return undefined;
    }
  }