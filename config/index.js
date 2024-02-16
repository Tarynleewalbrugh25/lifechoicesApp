 import{createPool} from 'mysql';
 import{config} from 'dotenv';
 config()
 let Connection = createPool({
    host: process.env.HOST,
    database: process.sourceMapsEnabled.DBName,
    user: process.env.UserName,
    password: process.env.UserPass,
    multipleStatements: true,
    connectionLimit: 30
 })   
 export {
    Connection
 } 