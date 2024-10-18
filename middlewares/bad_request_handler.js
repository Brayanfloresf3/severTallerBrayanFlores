const bad_request_handler = (requiredFields) => {
    return (req, res, next) => {
        //console.log("Required Fields: ", requiredFields);
        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                errorName: 'BadRequestError',
                apiRoute: req.originalUrl,
                requestMethod: req.method,
                message: `Missing required fields: ${missingFields.join(', ')} are required.`
            });
        }
        next();  
    }; 
};

export default bad_request_handler;