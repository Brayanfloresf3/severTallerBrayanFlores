import Employees from "../../models/Employee.js";

let getAllEmployees = async (req, res) => {
    try {
        let allEmployees = await Employees.find();
        return res.status(200).json({
            response: allEmployees
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
};

let getEmployeeByPosition = async (req, res) => {
    try {
        let position = req.params.position;
        let allEmployees = await Employees.find({ position: position });
        return res.status(200).json({
            response: allEmployees
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
};

let getEmployeeBySalary = async (req, res) => {
    try {
        let salary = Number(req.params.salary);
        let allEmployees = await Employees.find({ salary: salary });
        return res.status(200).json({
            response: allEmployees
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
};

export { getAllEmployees, getEmployeeByPosition, getEmployeeBySalary };
