import {Router} from 'express'
import conn from '../keys/connection'
import { RowDataPacket } from 'mysql2'
const routes:Router = Router()

routes.get('/:id', async (req, res)=>{
    const {id} = req.params
    try{
        const conexion = await conn
        if(!conexion)
            return res.status(204).send("Sin contenido")
        const [info] = await conexion.execute<RowDataPacket[]>("SELECT * FROM links WHERE id=?",[id])
        res.status(200).redirect(info[0].link)
    }catch(err){
        console.error(err)
        res.status(400).json({Message: "Mensaje no encontrado"})
    }
    //res.redirect()
})
export default routes