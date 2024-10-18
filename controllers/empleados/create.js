import Empleados from "../../models/Empleado.js";

let crearEmpleados = async (req, res) => {
    try {
      
        const nuevosEmpleados = req.body;

        // Verificar si es un array
        if (Array.isArray(nuevosEmpleados)) {
            // Insertar múltiples empleados
            const guardar = await Empleados.insertMany(nuevosEmpleados);
            return res.status(201).json({
                res: guardar,
                message: 'Empleados creados correctamente',
            });
        } else {
            // Crear un solo empleado
            const guardar = await Empleados.create(nuevosEmpleados);
            return res.status(201).json({
                res: guardar,
                message: 'Empleado creado correctamente',
            });
        }
    } catch (error) {
        next(error);
    }
};

export default crearEmpleados;

