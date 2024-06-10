import express from 'express'
import './keys/connection'
import routesCrearLink from './routes/routes.crearLink'
import routesRedireccionar from './routes/routes.redireccionar'
// express
const app = express()
app.use(express.json())
//rutas
app.get('/', (req, res)=>{
    res.status(200).send("<h1> Hello world</h1>")
})
app.use('/',routesRedireccionar)
app.use('/', routesCrearLink)
//MiddleWare No FOUND
app.use((req, res)=>{
    res.status(404).json({"Message":"File not found...."})
})

export default app