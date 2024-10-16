import 'dotenv/config.js'
import '../../config/database.js'
import Tienda from '../../models/Tienda.js'

let tiendas = [
    {
        nombre: "BurguerLabs",
        direccion: "Calle Falsa 123",
        telefono: 123456789
    },
    {
        nombre: "Hamburguesas El Rey",
        direccion: "Avenida Principal 456",
        telefono: 987654321
    },
    {
        nombre: "La Hamburguesa Perfecta",
        direccion: "Boulevard de la Comida 789",
        telefono: 456123789
    },
    {
        nombre: "Hamburguesas Gourmet",
        direccion: "Calle del Sabor 321",
        telefono: 321654987
    },
    {
        nombre: "Fast Food Burgers",
        direccion: "Plaza del Hambre 654",
        telefono: 789456123
    }
];

Tienda.insertMany(tiendas)
.then(() => console.log('Productos insertados'))
.catch((error) => console.log('Error insertando productos:', error));