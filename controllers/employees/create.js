import Employees from "../../models/Employee.js";

let createEmployees = async (req, res) => {
    try {
      
        const newEmployees = req.body;

        // Verificar si es un array
        if (Array.isArray(newEmployees)) {
            // Insertar múltiples empleados
            const save = await Employees.insertMany(newEmployees);
            return res.status(201).json({
                res: save,
                message: 'Employees created successfully',
            });
        } else {
            // Crear un solo empleado
            const save = await Employees.create(newEmployees);
            return res.status(201).json({
                res: save,
                message: 'Employee created successfully',
            });
        }
    } catch (error) {
        next(error);
    }
};

export default createEmployees;
