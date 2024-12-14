const formatValidationErrors = (errorsArray, code) => {
    return errorsArray.map((error) => errorJson(error, code));
};

const errorJson = (error, code) => {
    return {
        code: code,
        message: error.msg,
        parameters: {
            [error.path]: error.value || null,
        }
    }
};

module.exports = {
    formatValidationErrors,
    errorJson
}
