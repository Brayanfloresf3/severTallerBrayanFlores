import express from 'express'
import "dotenv/config.js"
import "./config/database.js"
import cors from 'cors'
import morgan from 'morgan' 
import tiendaRouter from "./router/tiendaRouter.js";
import productoRouter from "./router/productoRouter.js";
import empleadoRouter from "./router/empleadoRouter.js";
import not_found_handler from './middlewares/not_found_handler.js'
import error_handler from './middlewares/error_handler.js'

const server = express();
const PORT = process.env.PORT || 3000;
const ready = () => console.log("Servidor listo en el puerto", PORT);
   
// Midlewares
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }))
   
// Routers
server.use('/api/tiendas', tiendaRouter);
server.use('/api/productos', productoRouter);
server.use('/api/empleados', empleadoRouter);
// My Middlewares
server.use(not_found_handler)
server.use(error_handler)
 

server.listen(PORT, ready);

