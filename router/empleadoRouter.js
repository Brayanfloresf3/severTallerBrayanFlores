import { Router } from "express";
import { todosLosEmpleados, cargoEmpleado, salarioEmpleado } from "../controllers/empleados/read.js";

const empleadoRouter = Router();

empleadoRouter.get('/todos', todosLosEmpleados);
empleadoRouter.get('/cargo/:cargo', cargoEmpleado);
empleadoRouter.get('/salario/:salario', salarioEmpleado);

export default empleadoRouter;