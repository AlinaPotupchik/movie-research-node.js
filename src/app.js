require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const salesRoutes = require('./routes/salesRoutes');

class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use('/', salesRoutes);
    }

    start() {
        const port = process.env.PORT || 3000;
        this.app.listen(port, () => {
            console.log(`App running on port ${port}.`);
        });
    }
}

module.exports = new App();

