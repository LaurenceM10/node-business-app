/**
 * Validate if the elements of the request is correct
 *
 * @param request
 */
let validateProductForm = (request) => {
    Object.keys(request.params).forEach((key) => {
        if (key.length < 1) {
            return true;
        }
    });

    return false;
};


module.exports = {
    validateProductForm
};