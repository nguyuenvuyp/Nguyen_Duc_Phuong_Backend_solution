import * as sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function connectDB() {
  return open({
    filename: "database.db",
    driver: sqlite3.Database,
  });
}

// Khởi tạo bảng
export async function initDB() {
  const db = await connectDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS resources (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT
    )
  `);
}
