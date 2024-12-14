const express = require('express');
const { productCreationValidationRules, validateCreation } = require('../utils/validators/products/ProductCreateValidator');
const { productUpdateValidationRules, validateUpdate } = require('../utils/validators/products/ProductUpdateValidator');
const productController = require('../controllers/ProductController');

const router = express.Router();

router.post('/', productCreationValidationRules, validateCreation, productController.create)
      .get('/', productController.getAll)
      .get('/:id', productController.getById)
      .put('/:id', productUpdateValidationRules, validateUpdate, productController.update)
      .delete('/:id', productController.deleteById);

module.exports = router;
