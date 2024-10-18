import 'dotenv/config.js';
import '../../config/database.js';
import Employees from '../../models/Employee.js';

let employees = [
    { name: "Juan", position: "cashier", salary: 1500 },
    { name: "Maria", position: "cook", salary: 1600 },
    { name: "Carlos", position: "manager", salary: 2500 },
    { name: "Ana", position: "delivery person", salary: 1400 },
    { name: "Pedro", position: "cleaning", salary: 1300 },
];

Employees.insertMany(employees)
.then(() => console.log('Employees inserted'))
.catch((error) => console.log('Error inserting employees:', error));
