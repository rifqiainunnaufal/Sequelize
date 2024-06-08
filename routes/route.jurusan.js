import express from "express";
import jurusanController from "../controller/controller.jurusan.js";

const jurusanRouter = express.Router();

jurusanRouter.post("/create",jurusanController.create);

jurusanRouter.get("/all",jurusanController.getAll)

export default jurusanRouter;