import express from "express";
import http from "http";
import kelasRouter from "./routes/route.kelas.js";
import jurusanRouter from "./routes/route.jurusan.js";
import mahasiswaRouter from "./routes/route.mahasiswa.js";
import PgDataSource from "./datasource/pg.js";
import associate from "./datasource/associate.js";

const app = express();
const server = http.createServer(app);
const port = 6969;

app.use(express.json());

app.get("/Test",(req,res,next) =>{
    return res.status(200).json({msg: "Test Berhasil"})
})

app.use("/jurusan",jurusanRouter);
app.use("/mahasiswa",mahasiswaRouter)
app.use("/kelas",kelasRouter);

server.listen(port,async ()=> {
    associate.init();
    await PgDataSource.repo.sync();
    console.log("Yay, Anda berhasil connect ke Server");
})