import Productos from "../../models/Producto.js";

let createProducto = async (req, res) => {
    try {
        const nuevosProductos = req.body;

        // Verificar si es un array
        if (Array.isArray(nuevosProductos)) {
            // Insertar múltiples productos
            const guardar = await Productos.insertMany(nuevosProductos);
            return res.status(201).json({
                res: guardar,
                message: 'Productos creados correctamente',
            });
        } else {
            // Crear un solo producto
            const guardar = await Productos.create(nuevosProductos);
            return res.status(201).json({
                res: guardar,
                message: 'Producto creado correctamente',
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            res: error,
        });
    }
};

export default createProducto;
