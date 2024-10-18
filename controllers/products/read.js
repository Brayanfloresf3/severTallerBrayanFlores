import Products from "../../models/Product.js";
import errorHandler from "../../middlewares/error_handler.js";

let getAllProducts = async (req, res) => {
    try {
        let allProducts = await Products.find();
        console.log(allProducts);
        return res.status(200).json({
            response: allProducts
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
};

let getProductByType = async (req, res) => {
    try {
        let type = req.params.type;
        let allProducts = await Products.find({ type: type });
        return res.status(200).json({
            response: allProducts
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
};

let getProductByPrice = async (req, res) => {
    try {
        let price = req.params.price;
        let allProducts = await Products.find({ price: price });
        return res.status(200).json({
            response: allProducts
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
};

export { getAllProducts, getProductByType, getProductByPrice };
