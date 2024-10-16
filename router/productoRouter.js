import { Router } from "express";
import { todosLosProductos,tipoDeProducto,precioDeProducto } from "../controllers/productos/read.js";

const productoRouter = Router();

productoRouter.get('/todos', todosLosProductos);
productoRouter.get('/tipo/:tipo', tipoDeProducto);
productoRouter.get('/precio/:precio', precioDeProducto);

export default productoRouter;