import mahasiswa from "../models/mahasiswa.js";
import jurusan from "../models/jurusan.js";
import kelas from "../models/kelas.js";

class associate {
    static init() {
        jurusan.hasMany(mahasiswa,{foreignKey: "jurusanId"});
        mahasiswa.belongsTo(jurusan,{foreignKey: "jurusanId"});
        kelas.hasMany(mahasiswa,{foreignKey:"jurusanId"});
        mahasiswa.belongsTo(kelas,{foreignKey: "jurusanId"}); 
    }
}

export default associate;
