import 'dotenv/config.js'
import '../../config/database.js'
import Empleados from '../../models/Empleado.js'

let empleados = [
    { nombre: "juan", cargo: "cajero", salario: 1500 },
    { nombre: "maria", cargo: "cocinero", salario: 1600 },
    { nombre: "carlos", cargo: "gerente", salario: 2500 },
    { nombre: "ana", cargo: "repartidor", salario: 1400 },
    { nombre: "pedro", cargo: "limpieza", salario: 1300 },
];

Empleados.insertMany(empleados)
.then(() => console.log('Productos insertados'))
.catch((error) => console.log('Error insertando productos:', error));