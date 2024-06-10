import mysql2, { ConnectionOptions } from 'mysql2/promise'

const stringConection:ConnectionOptions = {
    database: "acortador_de_links" || process.env.DB_NAME,
    user:"root" || process.env.DB_USER,
    password:"1234" || process.env.DB_PASSWORD,
    host:"localhost" || process.env.DB_HOST
}
const connection = (()=>{
    try{
        const conn = mysql2.createConnection(stringConection)
        console.log("Conexion Exitosa!")
        return conn
    }catch(err){
        console.error(err)
    }
    return false
})()

export default connection