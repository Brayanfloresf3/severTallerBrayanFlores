import Tienda from '../../models/Tienda.js'

let todasLasTiendas = async (req ,res) => {
    try {
        let todas = await Tienda.find()
        return res.status(200).json({
            response: todas
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let telefonoTienda = async (req ,res) => {
    try {
        let telefono = req.params.telefono
        let todas = await Tienda.find({telefono: telefono})
        return res.status(200).json({
            response: todas
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let nombreTienda = async (req, res ) => {
    try {
        let nombre = req.params.nombre
        let todas = await Tienda.find({nombre: nombre})
        return res.status(200).json({
            response: todas
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export {todasLasTiendas, telefonoTienda, nombreTienda}