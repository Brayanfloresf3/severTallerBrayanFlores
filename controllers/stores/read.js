import Store from '../../models/Store.js';

let getAllStores = async (req, res) => {
    try {
        let allStores = await Store.find();
        return res.status(200).json({
            response: allStores
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
};

let getStoreByPhone = async (req, res) => {
    try {
        let phone = req.params.phone;
        let allStores = await Store.find({ phone: phone });
        return res.status(200).json({
            response: allStores
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
};

let getStoreByName = async (req, res) => {
    try {
        let name = req.params.name;
        let allStores = await Store.find({ name: name });
        return res.status(200).json({
            response: allStores
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
};

export { getAllStores, getStoreByPhone, getStoreByName };
