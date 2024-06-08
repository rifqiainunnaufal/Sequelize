import { Model, DataTypes } from "sequelize";
import PgDataSource from "../datasource/pg.js";

class mahasiswa extends Model{};

mahasiswa.init({

    NIM:{
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },

    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },

    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    IP:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    kelasId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key:"id",
            model: "kelas"
        }    
    },
    jurusanId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key:"id",
            model: "jurusans"
        }    
    }
},{sequelize: PgDataSource.repo, modelName: "mahasiswa"})

export default mahasiswa;