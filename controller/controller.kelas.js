import kelas from "../models/kelas.js";
import express from "express";

class kelasController{

    static createKelas = async (req,res,next) => {
        const data = req.body;
        if(!data.kelas){
            return res.status(400).json({msg: "Data tidak lengkap"})
        }else{
            await kelas.create({
              kelas: data.kelas  
            })
            return res.status(201).json(data);
        }
    }

    static getAll = async (req,res,next) => {
        const dataKelas = await kelas.findAll();
        return res.status(200).json(dataKelas)
    }
}
export default kelasController;