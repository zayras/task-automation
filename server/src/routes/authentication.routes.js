const UserValidationMiddleware = require('../middleware/user/validation.middleware')
const AuthenticationMiddleware = require('../middleware/auth/auth.middleware')
const AuthenticationController = require('../controllers/authentication.controller')

exports.routesConfig = (app) => {

    app.post('/auth', [
        UserValidationMiddleware.hasValidFields,
        AuthenticationMiddleware.isPasswordAndUserMatch,
        AuthenticationController.login
    ])

    app.post('/auth/refresh', [
        AuthenticationMiddleware.validJWTNeeded,
        AuthenticationMiddleware.verifyRefreshBodyField,
        AuthenticationMiddleware.validRefreshNeeded,
        AuthenticationController.login
    ])

    /* app.post('/logout', [
        AuthValidationMiddleware.validJWTNeeded,
        AuthenticationController.login
    ]) */
}