const productModel = require('../models/ProductModel');
const { errorJson } = require('../utils/errorFormatter')

const ProductController = {
    create: async (req, res) => {
        try {
            const newProduct = await productModel.create(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            console.log("ERROR: ", error);
            res.status(500).json({ error: 'Error creating the product.', details: error.message });
        }
    },
    getAll: async (req, res) => {
        try {
            const products = await productModel.getAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: 'Error get products.', details: error.message });
        }
    },

    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await productModel.getById(id);
            if (!product) {
                error = {
                    msg: 'Product not found.', path: 'id', value: id
                }
                return res.status(404).json({ errors: [ errorJson(error, 'PRODUCT_SEARCH_ERROR-NOT-FOUND') ] });
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: 'Error get product.', details: error.message });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        const updatedFields = req.body;

        try {
            const updatedClient = await productModel.update(id, updatedFields);

            if (!updatedClient) {
                error = {
                    msg: 'Product not found.', path: 'id', value: id
                }
                return res.status(404).json({ errors: [ errorJson(error, 'PRODUCT_UPDATE_ERROR-NOT-FOUND') ] });
            }

            res.status(200).json(updatedClient);
        } catch (error) {
            res.status(500).json({ error: 'Error updating the product.',details: error.message });
        }
    },
    deleteById: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await productModel.getById(id);
            if (!product) {
                error = {
                    msg: 'Product not found.', path: 'id', value: id
                }
                return res.status(404).json({ errors: [ errorJson(error, 'PRODUCT_DELETE_ERROR-NOT-FOUND') ] });
            }
            await productModel.deleteById(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Error get product.', details: error.message });
        }
    }
};

module.exports = ProductController;
