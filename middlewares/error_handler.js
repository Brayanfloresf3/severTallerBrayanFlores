const error_handler = (error,req,res,next) => {
    console.log(error);
    return res.status(500).json({
        success: false,
        message: "Ocurrió un error en el servidor",
        error: error.message || "Error desconocido"
    })
}

export default error_handler