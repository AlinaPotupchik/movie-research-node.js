const db = require('../config/dbConfig');

class SalesService {
    async getTopTheaterByDate(saleDate) {
        const query = `
      SELECT t.name, SUM(s.amount) AS total_sales
      FROM sales s
      JOIN theaters t ON s.theater_id = t.id
      WHERE s.sale_date = ?
      GROUP BY t.name
      ORDER BY total_sales DESC
      LIMIT 1;
    `;

        try {
            const [rows] = await db.pool.execute(query, [saleDate]);
            return rows.length > 0 ? rows[0] : null;
        } catch (error) {
            throw new Error('Database query failed.');
        }
    }
}

module.exports = new SalesService();