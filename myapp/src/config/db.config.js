const env = process.env;
require('dotenv').config()

const db = {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    port: env.DB_PORT,
    connectionLimit: env.DB_CONNECTION_LIMIT
};

module.exports = db;