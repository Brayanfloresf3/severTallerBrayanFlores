import { Router } from "express";
import { getAllEmployees, getEmployeeByPosition, getEmployeeBySalary } from "../controllers/employees/read.js";
import createEmployees from "../controllers/employees/create.js";
import badRequestHandler from "../middlewares/bad_request_handler.js"; 

const employeeRouter = Router();

const requiredEmployeeFields = ['name', 'position', 'salary'];

employeeRouter.get('/all', getAllEmployees);
employeeRouter.get('/position/:position', getEmployeeByPosition);
employeeRouter.get('/salary/:salary', getEmployeeBySalary);

employeeRouter.post('/create', badRequestHandler(requiredEmployeeFields), createEmployees);

export default employeeRouter;
