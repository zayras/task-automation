const { User } = require('../models')

const crypto = require('crypto')

exports.insert = (req, res) => {
    let salt = crypto.randomBytes(16).toString('base64')
    let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64")
    req.body.password = salt + "$" + hash
    req.body.permissionLevel = 1
    User.create(req.body)
        .then((result) => {
            res.status(201).send(result)
        }).catch((err) => {
            res.status(400).send(err)
        })
}

exports.list = (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10
    let page = 0
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page)
            page = Number.isInteger(req.query.page) ? req.query.page : 0
        }
    }
    User.findAndCountAll({
        limit: limit,
        offset: page
    }).then(result => {
        res.status(200).send(result)
    })
}

exports.getById = (req, res) => {
    User.findByPk(req.params.userId).then(result => {
        res.status(200).send(result)
    })
}

exports.patchById = (req, res) => {
    User.findByPk(req.params.userId).then(user => {
        if (req.body.password) {
            let salt = crypto.randomBytes(16).toString('base64')
            let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest('base64')
            req.body.password = salt + "$" + hash
        }
        user.update(req.body)
            .then((result) => {
                res.status(204).send({ result })
            })
    }).catch(() => {
        res.status(404).send('Error 404: No such user exist')
    })
}

exports.removeById = (req, res) => {
    User.findByPk(req.params.userId).then(user => {
        user.destroy()
            .then((result) => {
                res.status(204).send({ result })
            }).catch((err) => {
                res.status(400).send('Error: failed to delete')
            })
    }).catch(() => {
        res.status(404).send('Error 404: No such user exist')
    })
}
