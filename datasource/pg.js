import {Sequelize} from "sequelize";

class pgDataSource{

    constructor(dbName,username,password,host){

        console.log("sedang membuat server");
        this.repo = new Sequelize(dbName,username,password,{
            host: host,
            dialect: "postgres",
            sync: {
                alter: true
            }
        }) 
    }
    
    async connect(){
        await this.repo.authenticate();       
    }
};

const PgDataSource = new pgDataSource("stanic","postgres","3e8d73325700409ca39f7b838b23c45a","localhost");
export default PgDataSource;