import mahasiswaController from "../controller/controller.mahasiswa.js";
import express from "express";

const mahasiswaRouter = express.Router();

mahasiswaRouter.post("/create",mahasiswaController.create);

mahasiswaRouter.get("/infoMahasiswa/:NIM",mahasiswaController.getAll)
mahasiswaRouter.get("/all",mahasiswaController.get)
mahasiswaRouter.get("/allInfo",mahasiswaController.getComplete)

export default mahasiswaRouter;

