
const bad_request_handler = (req, res, next) => {
    const { nombre, direccion, telefono } = req.body;
 
    if (!nombre || !direccion || !telefono) {
        return res.status(400).json({
            success: false,
            errorName: 'BadRequestError',
            apiRoute: req.originalUrl,
            requestMethod: req.method,
            message: "Faltan datos obligatorios: nombre, direccion y teléfono son requeridos."
        });
    }
};

export default bad_request_handler;


  