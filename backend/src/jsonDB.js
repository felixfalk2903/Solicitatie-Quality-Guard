
const JsonDB = require('node-json-db').JsonDB
const Config = require('node-json-db/dist/lib/JsonDBConfig').Config



class jsonDB{

    constructor(){
         this.db = new JsonDB(new Config("myDataBase", true, false, '/'));
    }
    async init(data){
        await this.db.push("/AllRecepies",data)
        console.log("initial data received")
    }
    async read(){
        return await this.db.getData("/AllRecepies");
    }
    //rewrites the whole object (not very efficient)
    async write(data){
        await this.db.push("/AllRecepies",data)
    }
}

module.exports = jsonDB
