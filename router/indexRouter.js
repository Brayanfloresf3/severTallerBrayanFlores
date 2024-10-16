import { Router } from "express"
import tiendaRouter from "../routes/tiendaRouter.js"
import productoRouter from "./productoRouter.js"
import empleadoRouter from "./empleadoRouter.js"


const router = Router()

router.use("/tiendas", tiendaRouter)
router.use("/productos", productoRouter)
router.use("/empleados", empleadoRouter)
router.use("/")

export default router