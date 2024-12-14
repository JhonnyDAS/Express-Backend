const { body } = require('express-validator');

const ProductUpdateValidationRules = [
    body('name')
        .optional()
        .notEmpty()
        .withMessage('Must not be blank.'),
    body('description')
        .optional()
        .notEmpty()
        .withMessage('Must not be blank.'),
    body('brand')
        .optional()
        .notEmpty()
        .withMessage('Must not be blank.'),
    body('model')
        .optional()
        .notEmpty()
        .withMessage('Must not be blank.'),
    body('category')
        .optional()
        .notEmpty()
        .withMessage('Must not be blank.')
];

module.exports = ProductUpdateValidationRules;
