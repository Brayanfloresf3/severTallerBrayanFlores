import { Router } from "express";
import { todosLosEmpleados, cargoEmpleado, salarioEmpleado } from "../controllers/empleados/read.js";
import crearEmpleados from "../controllers/empleados/create.js";

const empleadoRouter = Router();

empleadoRouter.get('/todos', todosLosEmpleados);
empleadoRouter.get('/cargo/:cargo', cargoEmpleado);
empleadoRouter.get('/salario/:salario', salarioEmpleado);
empleadoRouter.post('/crear', crearEmpleados);

export default empleadoRouter; 