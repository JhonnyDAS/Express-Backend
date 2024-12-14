const { validationResult } = require('express-validator');
const productUpdateValidationRules = require('./ProductUpdateValidationRules');
const { formatValidationErrors } = require('../../errorFormatter');

const allowedFields = ['name', 'description', 'brand', 'model', 'category'];

const validateUpdate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const formattedErrors = formatValidationErrors(errors.array(), 'PRODUCT_UPDATE_ERROR-INVALID-PAYLOAD');
        return res.status(400).json({ errors: formattedErrors });
    }

    const unknownFields = Object.keys(req.body).filter(field => !allowedFields.includes(field));
        
        if (unknownFields.length > 0) {
            const invalidFields = unknownFields.map(property => ({msg: "Invalid Property, check documentation.", path: "property", value: property}));
            const formattedErrors = formatValidationErrors(invalidFields, 'PRODUCT_UPDATE_ERROR-UNKNOWN-PROPERTY');
            return res.status(400).json({ errors: formattedErrors });
        }
    
    next();
};

module.exports = {
    productUpdateValidationRules,
    validateUpdate,
};
