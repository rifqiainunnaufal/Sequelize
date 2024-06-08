import jurusan from "../models/jurusan.js";

class jurusanController{

    static create = async (req,res,next)=>{
        const data = req.body;
        if(!data.namaJurusan){
            return res.status(400).json({msg: "Data Tidak lengkap"})
        }
        await jurusan.create({
            "namaJurusan": data.namaJurusan
        })
        return res.status(201).json(data);
    }
    static getAll = async (req,res,next) =>{
        const dataJurusan = await jurusan.findAll();
        return res.status(200).json(dataJurusan);
    }
}
export default jurusanController;
 