const not_found_handler = (req,res,next) => {
    return res.status(404).json({
        success: false,
        message: `la peticion con el metodo ${req.method} y la ruta ${req.originalUrl} no existe`
    }) 
}
export default not_found_handler