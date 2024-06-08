import mahasiswa from "../models/mahasiswa.js";
import jurusan from "../models/jurusan.js"
import kelas from "../models/kelas.js"

class mahasiswaController{

    static create = async (req,res,next) =>{
        const data = req.body
        if(!data.NIM || !data.firstName || !data.lastName || !data.IP || !data.jurusanId|| !data.kelasId){
            return res.status(400).json({msg: "Data tidak lengkap"})
        }
        await mahasiswa.create(data) 
        return res.status(201).json(data)
    }

    static get = async (req,res,next) =>{
        const dataMahasiswa = await mahasiswa.findAll();
        return res.status(200).json(dataMahasiswa);
    }

    static getById = async (req,res,next) => {
        const data = req.params.NIM
        const dataMahasiswa = await mahasiswa.findByPk(data)
        return res.status(200).json(dataMahasiswa)
    }

    static getAll = async (req,res,next) => {
        const data = req.params.NIM
        const dataMahasiswa = await mahasiswa.findByPk(data,{include: [{model: jurusan}, {model:kelas}]})
        return res.status(200).json(dataMahasiswa)
    }

    static getComplete = async (req,res,next) => {
        const dataMahasiswa = await mahasiswa.findAll({include: [{model: jurusan}, {model:kelas}]})
        return res.status(200).json(dataMahasiswa);
    }
};

export default mahasiswaController;
