import Tienda from "../../models/Tienda.js";

let crearTiendas = async (req, res) => {
    try { 
        const nuevasTiendas = req.body;

        // Verificar si es un array
        if (Array.isArray(nuevasTiendas)) {
            // Insertar múltiples tiendas
            const guardar = await Tienda.insertMany(nuevasTiendas);
            return res.status(201).json({
                response: guardar,
                message: 'Tiendas creadas correctamente',
            }); 
        } else {
            // Crear una sola tienda
            const guardar = await Tienda.create(nuevasTiendas);
            return res.status(201).json({
                response: guardar,
                message: 'Tienda creada correctamente',
            }); 
        }
    } catch (error) {
        next(error);   
    }
};

export default crearTiendas;
