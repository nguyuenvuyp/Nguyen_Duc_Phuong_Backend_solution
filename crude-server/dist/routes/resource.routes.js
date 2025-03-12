"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("../config/database");
const router = express_1.default.Router();
// Tạo tài nguyên
router.post("/resources", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    const db = yield (0, database_1.connectDB)();
    const result = yield db.run("INSERT INTO resources (name, description) VALUES (?, ?)", [name, description]);
    res.json({ id: result.lastID, name, description });
}));
// Lấy danh sách tài nguyên
router.get("/resources", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, database_1.connectDB)();
    const resources = yield db.all("SELECT * FROM resources");
    res.json(resources);
}));
// Lấy chi tiết một tài nguyên
router.get("/resources/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, database_1.connectDB)();
    const resource = yield db.get("SELECT * FROM resources WHERE id = ?", [
        req.params.id,
    ]);
    resource ? res.json(resource) : res.status(404).json({ error: "Not found" });
}));
// Cập nhật tài nguyên
router.put("/resources/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    const db = yield (0, database_1.connectDB)();
    yield db.run("UPDATE resources SET name = ?, description = ? WHERE id = ?", [
        name,
        description,
        req.params.id,
    ]);
    res.json({ message: "Updated successfully" });
}));
// Xóa tài nguyên
router.delete("/resources/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, database_1.connectDB)();
    yield db.run("DELETE FROM resources WHERE id = ?", [req.params.id]);
    res.json({ message: "Deleted successfully" });
}));
exports.default = router;
