const mysql = require('mysql2/promise');

class Database {
    constructor() {
        this.pool = mysql.createPool({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || 'password',
            database: process.env.DB_DATABASE || 'moviesdb',
        });
    }

    async getConnection() {
        return this.pool.getConnection();
    }
}

module.exports = new Database();
