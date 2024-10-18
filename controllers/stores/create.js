import Store from "../../models/Store.js";
 
let createStores = async (req, res, next) => {
    try { 
        console.log(req.body);
        const newStores = req.body;

        // Verificar si es un array
        if (Array.isArray(newStores)) {
            // Insertar múltiples tiendas
            const save = await Store.insertMany(newStores);
            return res.status(201).json({
                response: save,
                message: 'Stores created successfully',
            }); 
        } else {
           // Crear una sola tienda
            const save = await Store.create(newStores);
            return res.status(201).json({
                response: save,
                message: 'Store created successfully',
            }); 
        }
    } catch (error) {
        next(error);   
    }
};

export default createStores;
