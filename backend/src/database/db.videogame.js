async function insert(id, data) {
    await db.query(sql`
      INSERT INTO Videogame (id, title, stock, companyId, releaseDate, platform, price)
        VALUES (${id}, ${data.title}, ${data.stock}, ${data.companyId}, ${data.releaseDate}, ${data.platform}, ${data.price})
      ON CONFLICT (id) DO UPDATE
        SET value=excluded.value;
    `);
  }
  
  async function get(id) {
    const results = await db.query(sql`
      SELECT value FROM Videogame WHERE id=${id};
    `);
    if (results.length) {
      return results[0].value;
    } else {
      return undefined;
    }
  }
  
  async function remove(id) {
    await db.query(sql`
      DELETE FROM Videogame WHERE id=${id};
    `);
  }

  async function getAll() {
    const results = await db.query(sql`
    SELECT * FROM Videogame;
  `);
    if (results.length) {
        return results
    } else {
      return undefined;
    }
  }