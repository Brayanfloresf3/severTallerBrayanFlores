import { Router } from "express"
import { todasLasTiendas, telefonoTienda, nombreTienda } from "../controllers/tiendas/read.js"
import crearTiendas from "../controllers/tiendas/create.js"
import bad_request_handler from "../middlewares/bad_request_handler.js"

const tiendaRouter = Router()


tiendaRouter.get('/todas', todasLasTiendas)
tiendaRouter.get('/telefono/:telefono', telefonoTienda)
tiendaRouter.get('/nombre/:nombre', nombreTienda)
tiendaRouter.post('/crear', bad_request_handler, crearTiendas)

export default tiendaRouter
