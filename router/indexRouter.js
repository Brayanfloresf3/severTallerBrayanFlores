import { Router } from "express";
import storeRouter from "../routes/storeRouter.js";
import productRouter from "./productRouter.js";
import employeeRouter from "./employeeRouter.js";

const router = Router();

router.use("/stores", storeRouter);
router.use("/products", productRouter);
router.use("/employees", employeeRouter);
router.use("/");

export default router;
