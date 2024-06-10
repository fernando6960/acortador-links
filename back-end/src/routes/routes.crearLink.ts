import {Router} from 'express'
import conn from '../keys/connection'
import { ResultSetHeader, RowDataPacket } from 'mysql2'
import {generateRandomString} from '../util/generarString'
const routes:Router = Router()

routes.post('/', existeLink,async (req, res)=>{
    const {link} = req.body
    try{
        const conexion = await conn
        if(!conexion)
            return res.status(400).send("No pudo conectarse")
        let rows:number
        //Evitando que un id que no existe impida el correcto funcionamiento
        do{
            const [info] = await conexion.query<ResultSetHeader>("INSERT INTO links VALUES (?,?)",[generateRandomString(5), link])
            rows = info.affectedRows
        }while(rows <=0);
        res.status(201).json({Message:"Creado con exito!"})
        
    }catch(err){
        console.error(err)
    }
})
async function existeLink (req:any, res:any, next:any){
    const {link} = req.body
    try{
        const conexion = await conn
        if(!conexion)
            return res.send('No Conection')
        const [info] = await conexion.execute<RowDataPacket[]>('SELECT * FROM links where link=?',[link])
        if(info[0] === undefined)
            return next()
        res.json({message: info[0].id})
    }catch(error){
        console.error(error)
    }
} 
export default routes
