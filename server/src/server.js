const config = require('./config').api
const { sequelize } = require('./models')

const express = require('express')
const bodyParser = require('body-parser')


const app = express()

const AuthenticationRouter = require('./routes/authentication.routes')
const UsersRouter = require('./routes/user.routes')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
    res.header('Access-Control-Expose-Headers', 'Content-Length')
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range')
    if (req.method === 'OPTIONS') {
        return res.send(200)
    } else {
        return next()
    }
})

app.use(bodyParser.json())

AuthenticationRouter.routesConfig(app)
UsersRouter.routesConfig(app)

sequelize.sync().then(() => {
    console.log("Database is connected")
    app.listen(config.port, () => {
        console.log('app listening at port %s', config.port)
    })
}).catch((err) => {
    console.log(err)
})
