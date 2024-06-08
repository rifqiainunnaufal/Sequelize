import { DataTypes,Model } from "sequelize";
import PgDataSource from "../datasource/pg.js";

class kelas extends Model{};

kelas.init({

    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    kelas:{
        type: DataTypes.STRING,
        allowNull: false
    } 

},{sequelize: PgDataSource.repo ,freezeTableName:"true"}
)

export default kelas;