import { Router } from "express";
import { todosLosProductos,tipoDeProducto,precioDeProducto } from "../controllers/productos/read.js";
import createProducto from "../controllers/productos/create.js";

const productoRouter = Router();

productoRouter.get('/todos', todosLosProductos);
productoRouter.get('/tipo/:tipo', tipoDeProducto);
productoRouter.get('/precio/:precio', precioDeProducto);
productoRouter.post('/crear', createProducto);

export default productoRouter;