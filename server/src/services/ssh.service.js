const SSH2Shell = require('ssh2shell')
const sleep = require('system-sleep')
const { TaskReturn } = require('../models')

exports.execute = (task) => {
    let cmd = [task.commands]
    console.log(cmd)
    const host = {
        server: {
            host: task.remote,
            port: task.port || 22, // set default as 22
            userName: task.username,
            password: task.password
        },
        // make a duplicate array of commands
        // this ensures commands are availablr for
        // each task activation cycle
        commands: [...cmd],
        // set default timeout to 5 seconds, x2 to ensure
        // connection do not timeout while waiting between
        // command execution
        idleTimeOut: task.wait * 2 || 5000,
        // called when a command is run, and output is placed in stdout
        onCommandComplete: (command, response, sshObj) => {
            // TODO: add to persistent storage
            TaskReturn.create({
                name: task.name,
                command: command,
                stdout: response
            }).then((result) => console.log(`OK: command ${command} of ${task.name} executed`))
                .catch((err) => {
                    console.log(`ERROR: ${err.name}, ${err.message}`)
                    fs.appendFile('errors.txt', `Error: ${err.name}, ${err.message}\n`, (err) => {
                        if (err) throw err
                    })
                })
            // console.log(`STDOUT:  ${response}`)
            // no need to add the delay for the last command
            if (sshObj.commands.length !== 0) {
                sleep(task.wait)
            }
        },
        onData: (data) => {
            // console.log(`Data: ${data}`)
        },
        // called when an error is thrown
        onError: (err, type, close, callback) => {
            console.log(`Error: ${err.name}, ${err.message}`)
            fs.appendFile('errors.txt', `Error: ${err.name}, ${err.message}\n`, (err) => {
                if (err) throw err
            })
        },
        // connection terminated
        onEnd: (sessionText, sshObj) => {
            console.log('done......')
        }
    }
    // instantiate ssh
    var SSH = new SSH2Shell(host)
    // connect
    SSH.connect()
}