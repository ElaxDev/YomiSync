import { createClient } from '@libsql/client';
import dotenv from 'dotenv';

dotenv.config();

export const db = createClient({
  url: process.env.DATABASE_URL ?? '',
  authToken: process.env.DB_TOKEN,
});

export async function connectDB() {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL);
    `);

    await db.execute(`
      CREATE TABLE IF NOT EXISTS rooms (
        id SERIAL PRIMARY KEY,
        code TEXT NOT NULL,
        host_id INT NOT NULL,
        FOREIGN KEY (host_id) REFERENCES users(id));
    `);
    console.log('💾 Database is connected');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
}
