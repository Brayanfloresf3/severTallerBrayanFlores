import { Router } from "express";
import { getAllStores, getStoreByPhone, getStoreByName } from "../controllers/stores/read.js";
import createStores from "../controllers/stores/create.js";
import badRequestHandler from "../middlewares/bad_request_handler.js";

const storeRouter = Router();
const requiredStoreFields = ['name', 'address', 'phone']; 

storeRouter.get('/all', getAllStores);
storeRouter.get('/phone/:phone', getStoreByPhone);
storeRouter.get('/name/:name', getStoreByName);

storeRouter.post('/create', badRequestHandler(requiredStoreFields), createStores);

export default storeRouter;
