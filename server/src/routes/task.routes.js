const TasksController = require('../controllers/task.controller')
const TaskValidationMiddleware = require('../middleware/task/task.middleware')
const PermissionMiddleware = require('../middleware/permission/permission.middleware')
const AuthenticationMiddleware = require('../middleware/auth/auth.middleware')

const config = require('../config').api

const ADMIN = config.permissionLevels.ADMIN
const USER = config.permissionLevels.USER

exports.routesConfig = (app) => {
    app.post('/tasks', [
        AuthenticationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        TaskValidationMiddleware.hasValidFields,
        TasksController.insert
    ])
    app.get('/tasks', [
        AuthenticationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(USER),
        TasksController.list
    ])
    app.get('/tasks/:taskId', [
        AuthenticationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(USER),
        TasksController.getById
    ])
    app.patch('/tasks/:taskId', [
        AuthenticationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        TasksController.patchById
    ])
    app.delete('/tasks/:taskId', [
        AuthenticationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        TasksController.removeById
    ])
}