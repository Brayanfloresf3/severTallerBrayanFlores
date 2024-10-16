import Productos from "../../models/Producto.js"

let todosLosProductos = async (req, res) => {
    try {
        let todos = await Productos.find();
        console.log(todos);
        return res.status(200).json({
            respondes: todos
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

let tipoDeProducto = async (req, res) => {
    try {
        let tipo = req.params.tipo;
        let todos = await Productos.find({ tipo: tipo });
        return res.status(200).json({
            respondes: todos
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

let precioDeProducto = async (req, res) => {
    try {
        let precio = req.params.precio;
        let todos = await Productos.find({ precio: precio });
        return res.status(200).json({
            respondes: todos
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
}

export {
    todosLosProductos,
    tipoDeProducto,
    precioDeProducto
}