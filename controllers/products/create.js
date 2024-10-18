import Products from "../../models/Product.js";

let createProducts = async (req, res) => {
    try {
        const newProducts = req.body;

        // Verify if it's an array
        if (Array.isArray(newProducts)) {
            // Insert multiple products
            const save = await Products.insertMany(newProducts);
            return res.status(201).json({
                res: save,
                message: 'Products created successfully',
            });
        } else {
            // Create a single product
            const save = await Products.create(newProducts);
            return res.status(201).json({
                res: save,
                message: 'Product created successfully',
            });
        }
    } catch (error) {
        next(error);
    }
};

export default createProducts;
