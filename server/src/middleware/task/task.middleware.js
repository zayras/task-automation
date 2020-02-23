exports.hasValidFields = (req, res, next) => {
    let errors = []

    if (req.body) {
        if (!req.body.name) {
            errors.push('Missing name field')
        }
        if (!req.body.username) {
            errors.push('Missing username field')
        }
        if (!req.body.password) {
            errors.push('Missing password field')
        }
        if (!req.body.remote) {
            errors.push('Missing remote field')
        }
        if (!req.body.port) {
            errors.push('Missing port field')
        }
        if (!req.body.commands) {
            errors.push('Missing commands field')
        }
        if (!req.body.criteria) {
            errors.push('Missing criteria field')
        }
        if (!req.body.delay) {
            errors.push('Missing delay field')
        }

        if (errors.length) {
            return res.status(400).send({ errors: errors.join(',') })
        } else {
            return next()
        }
    } else {
        return res.status(400).send({ errors: 'name, username, password, remote, port, commands, criteria and delay fields are missing' })
    }
}