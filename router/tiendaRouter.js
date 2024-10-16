import { Router } from "express"
import { todasLasTiendas, telefonoTienda, nombreTienda } from "../controllers/tiendas/read.js"

const tiendaRouter = Router()

tiendaRouter.get('/todas', todasLasTiendas)
tiendaRouter.get('/telefono/:telefono', telefonoTienda)
tiendaRouter.get('/nombre/:nombre', nombreTienda)

export default tiendaRouter
