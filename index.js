import express from 'express';
import "dotenv/config.js";
import "./config/database.js";
import cors from 'cors';
import morgan from 'morgan'; 
import storeRouter from "./router/storeRouter.js";
import productRouter from "./router/productRouter.js";
import employeeRouter from "./router/employeeRouter.js";
import not_found_handler from './middlewares/not_found_handler.js';
import error_handler from './middlewares/error_handler.js';

const server = express();
const PORT = process.env.PORT || 3000;
const ready = () => console.log("Server ready on port", PORT); 
   
// Middlewares
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
   
// Routers
server.use('/api/stores', storeRouter);
server.use('/api/products', productRouter);
server.use('/api/employees', employeeRouter);
// My Middlewares
server.use(not_found_handler);
server.use(error_handler);
 
server.listen(PORT, ready);
