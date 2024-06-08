import express from "express";
import kelasController from "../controller/controller.kelas.js";

const kelasRouter = express.Router();

kelasRouter.post("/create",kelasController.createKelas);

kelasRouter.get("/alll",kelasController.getAll)

export default kelasRouter;