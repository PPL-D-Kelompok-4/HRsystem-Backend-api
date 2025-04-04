import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Create a connection pool
const pool = mysql.createPool({
	host: process.env.DB_HOST || "127.0.0.1",
	user: process.env.DB_USER || "root",
	password: process.env.DB_PASSWORD || "",
	database: process.env.DB_NAME || "hrsystem-db",
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

export default pool;
