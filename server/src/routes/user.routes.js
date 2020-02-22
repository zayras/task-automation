const UsersController = require('../controllers/user.controller')
/* const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware')
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware')
const config = require('../config').api */

/* const ADMIN = config.permissionLevels.ADMIN
const PAID = config.permissionLevels.PAID_USER
const FREE = config.permissionLevels.NORMAL_USER */

exports.routesConfig = (app) => {
    app.post('/users', [
        UsersController.insert
    ])
    /* app.get('/users', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(PAID),
        UsersController.list
    ])
    app.get('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(FREE),
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.getById
    ])
    app.patch('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(FREE),
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.patchById
    ])
    app.delete('/users/:userId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        UsersController.removeById
    ]) */
}