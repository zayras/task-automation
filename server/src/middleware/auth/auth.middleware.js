const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const secret = require('../../config').api.jwt.secret
const { User } = require('../../models')

exports.verifyRefreshBodyField = (req, res, next) => {
    if (req.body && req.body.refresh_token) {
        return next()
    } else {
        return res.status(400).send({ error: 'need to pass refresh_token field' })
    }
}

exports.validRefreshNeeded = (req, res, next) => {
    let b = Buffer(req.body.refresh_token, 'base64')
    let refresh_token = b.toString()
    let hash = crypto.createHmac('sha512', req.jwt.refreshKey).update(req.jwt.userId + secret).digest("base64")
    if (hash === refresh_token) {
        req.body = req.jwt
        return next()
    } else {
        return res.status(400).send({ error: 'Invalid refresh token' })
    }
}

exports.validJWTNeeded = (req, res, next) => {
    if (req.headers['authorization']) {
        try {
            let authorization = req.headers['authorization'].split(' ')
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send()
            } else {
                req.jwt = jwt.verify(authorization[1], secret)
                return next()
            }

        } catch (err) {
            return res.status(403).send('validJWT needed - stuck here')
        }
    } else {
        return res.status(401).send()
    }
}

exports.isPasswordAndUserMatch = (req, res, next) => {
    User.findAll({
        where: {
            email: req.body.email
        }
    }).then((user) => {
        if (!user[0]) {
            res.status(404).send({})
        } else {
            let passwordFields = user[0].password.split('$')
            let salt = passwordFields[0]
            let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest('base64')
            if (hash === passwordFields[1]) {
                req.body = {
                    userId: user[0].id,
                    email: user[0].email,
                    permissionLevel: user[0].permissionLevel,
                    name: user[0].firstName + ' ' + user[0].lastName,
                }
                return next()
            } else {
                return res.status(400).send({ errors: ['Invalid e-mail or password'] })
            }
        }
    })
}