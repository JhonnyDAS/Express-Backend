const { body } = require('express-validator');

const ProductCreationValidationRules = [
    body('name')
        .notEmpty()
        .withMessage('Must not be blank.'),
    body('description')
        .notEmpty()
        .withMessage('Must not be blank.'),
    body('brand')
        .notEmpty()
        .withMessage('Must not be blank.'),
    body('model')
        .notEmpty()
        .withMessage('Must not be blank.'),
    body('category')
        .notEmpty()
        .withMessage('Must not be blank.')
];

module.exports = ProductCreationValidationRules;
