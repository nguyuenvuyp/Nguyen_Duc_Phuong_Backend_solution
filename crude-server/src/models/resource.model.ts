import { connectDB } from "../config/database";

export async function createResourceH(name: string, description: string) {
  const db = await connectDB();
  const result = await db.run("INSERT INTO resources (name, description) VALUES (?, ?)", [name, description]);
  return { id: result.lastID, name, description };
}

export async function listResourcesH() {
  const db = await connectDB();
  return db.all("SELECT * FROM resources");
}

export async function getResourceH(id: number) {
  const db = await connectDB();
  return db.get("SELECT * FROM resources WHERE id = ?", [id]);
}

export async function updateResourceH(id: number, name: string, description: string) {
  const db = await connectDB();
  await db.run("UPDATE resources SET name = ?, description = ? WHERE id = ?", [name, description, id]);
  return getResourceH(id);
}

export async function deleteResourceH(id: number) {
  const db = await connectDB();
  await db.run("DELETE FROM resources WHERE id = ?", [id]);
}
