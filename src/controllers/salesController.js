const SalesService = require('../services/salesService');

class SalesController {
    async showForm(req, res) {
        res.send(`
      <h1>Enter a Date</h1>
      <form action="/results" method="post">
        <input type="date" name="sale_date" required>
        <button type="submit">Submit</button>
      </form>
    `);
    }

    async getResults(req, res) {
        const saleDate = req.body.sale_date;

        if (!saleDate) {
            return res.status(400).send('Invalid date.');
        }

        try {
            const theater = await SalesService.getTopTheaterByDate(saleDate);

            if (theater) {
                res.send(`
          <h2>Results for ${saleDate}</h2>
          <p>The theater with the most sales is <strong>${theater.name}</strong> with total sales of $${theater.total_sales}.</p>
        `);
            } else {
                res.send(`<p>No sales data found for ${saleDate}.</p>`);
            }
        } catch (error) {
            console.error('Error:', error.message);
            res.status(500).send('Server error.');
        }
    }
}

module.exports = new SalesController();
