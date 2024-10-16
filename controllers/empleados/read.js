import Empleados from "../../models/Empleado.js"

let todosLosEmpleados = async (req, res) => {
    try {
        let todos = await Empleados.find();
        return res.status(200).json({
            response: todos
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

let cargoEmpleado = async (req, res) => {
    try {
        let cargo = req.params.cargo;
        let todos = await Empleados.find({ cargo: cargo });
        return res.status(200).json({
            response: todos
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

let salarioEmpleado = async (req, res) => {
    try {
        let salario = Number(req.params.salario);
        let todos = await Empleados.find({ salario: salario });
        return res.status(200).json({
            response: todos
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export { todosLosEmpleados, cargoEmpleado, salarioEmpleado }