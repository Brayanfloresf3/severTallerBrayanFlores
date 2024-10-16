import { Router } from "express";
import { todosLosEmpleados, cargoEmpleado, salarioEmpleado } from "../controllers/empleados/read.js";
import createEmpleados from "../controllers/empleados/create.js";

const empleadoRouter = Router();

empleadoRouter.get('/todos', todosLosEmpleados);
empleadoRouter.get('/cargo/:cargo', cargoEmpleado);
empleadoRouter.get('/salario/:salario', salarioEmpleado);
empleadoRouter.post('/crear', createEmpleados);

export default empleadoRouter;