import express from 'express'
import "dotenv/config.js"
import "./config/database.js"
import cors from 'cors'
import morgan from 'morgan'
import tiendaRouter from "./router/tiendaRouter.js";
import productoRouter from "./router/productoRouter.js";
import empleadoRouter from "./router/empleadoRouter.js";


const server = express();
const PORT = process.env.PORT || 3000;
const ready = () => console.log("Servidor listo en el puerto", PORT);

// Midlewares 
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }))
 
// Rutas
server.use('/api/tiendas', tiendaRouter);
server.use('/api/productos', productoRouter);
server.use('/api/empleados', empleadoRouter);

server.listen(PORT, ready);

