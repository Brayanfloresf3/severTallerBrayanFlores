import { Router } from "express"
import { todasLasTiendas, telefonoTienda, nombreTienda } from "../controllers/tiendas/read.js"
import create from "../controllers/tiendas/create.js"

const tiendaRouter = Router()

tiendaRouter.get('/todas', todasLasTiendas)
tiendaRouter.get('/telefono/:telefono', telefonoTienda)
tiendaRouter.get('/nombre/:nombre', nombreTienda)
tiendaRouter.post('/crear', create)


export default tiendaRouter
