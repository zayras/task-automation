const { Task } = require('../models')

exports.insert = (req, res) => {
    Task.create(req.body)
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
    Task.findAndCountAll({
        limit: limit,
        offset: page
    }).then(result => {
        res.status(200).send(result)
    })
}

exports.getById = (req, res) => {
    Task.findByPk(req.params.taskId).then(result => {
        res.status(200).send(result)
    })
}

exports.patchById = (req, res) => {
    Task.findByPk(req.params.taskId).then(task => {
        task.update(req.body)
            .then((result) => {
                res.status(204).send({ result })
            })
    }).catch(() => {
        res.status(404).send('Error 404: No such task exist')
    })
}

exports.removeById = (req, res) => {
    Task.findByPk(req.params.taskId).then(task => {
        task.destroy()
            .then((result) => {
                res.status(204).send({ result })
            }).catch((err) => {
                res.status(400).send('Error: failed to delete')
            })
    }).catch(() => {
        res.status(404).send('Error 404: No such task exist')
    })
}
