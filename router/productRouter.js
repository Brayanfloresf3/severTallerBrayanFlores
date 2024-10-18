import { Router } from "express";
import { getAllProducts, getProductByType, getProductByPrice } from "../controllers/products/read.js";
import createProducts from "../controllers/products/create.js";
import badRequestHandler from "../middlewares/bad_request_handler.js";

const productRouter = Router();
const requiredProductFields = ['name', 'type', 'brand', 'price']

productRouter.get('/all', getAllProducts);
productRouter.get('/type/:type', getProductByType);
productRouter.get('/price/:price', getProductByPrice);

productRouter.post('/create', badRequestHandler(requiredProductFields), createProducts);

export default productRouter; 
