import express from "express";
import resourceRoutes from "./routes/resource.routes";
import { initDB } from "./config/database";

const app = express();
app.use(express.json());

// Khởi tạo database
initDB().then(() => console.log("Database initialized"));

app.use("/resources", resourceRoutes);

app.listen(3001, () => console.log("Server running on port 3001"));
