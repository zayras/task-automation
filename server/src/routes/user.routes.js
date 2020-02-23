const UsersController = require('../controllers/user.controller')
const PermissionMiddleware = require('../middleware/permission/permission.middleware')
const AuthenticationMiddleware = require('../middleware/auth/auth.middleware')

const config = require('../config').api

const ADMIN = config.permissionLevels.ADMIN
const USER = config.permissionLevels.USER

exports.routesConfig = (app) => {
    app.post('/users', [
        UsersController.insert
    ])
    app.get('/users', [
        AuthenticationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        UsersController.list
    ])
    app.get('/users/:userId', [
        AuthenticationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(USER),
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.getById
    ])
    app.patch('/users/:userId', [
        AuthenticationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(USER),
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.patchById
    ])
    app.delete('/users/:userId', [
        AuthenticationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        UsersController.removeById
    ])
}