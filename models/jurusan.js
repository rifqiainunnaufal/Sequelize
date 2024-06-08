import { Model, DataTypes } from "sequelize";
import PgDataSource from "../datasource/pg.js";

class jurusan extends Model{};

jurusan.init({
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: true
    },
    
    namaJurusan: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{sequelize: PgDataSource.repo, modelName: "jurusan"})

export default jurusan;
