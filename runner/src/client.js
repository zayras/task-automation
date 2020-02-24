const io = require('socket.io-client')
const ioClient = io.connect('http://localhost:3600')

const Scheduler = require('cron').CronJob

var index = 0
var payloads = []
var schedules = []

/*
{
    id: 1,
    name: 'task-name',
    username: 'root',
    password: 'password',
    host: 'xx.xx.xxx.xxx',
    port: '22',
    commands : [
        'echo $(pwd)',
        'uptime',
        'cd /home'
    ],
    wait: 1000,
    criteria : '* * * * *',
    ====================== ADDED LATER
    index: 5,
    active: true / false
    ======================
}
*/

ioClient.on('seq-num', (msg) => console.info(msg))

ioClient.on('push', (payload) => {
    // check if already exist
    // then replace existing
    // update schedules
    // ** make sure to start if started, and stop if stop,
    // else add new
})

ioClient.on('pop', (payload) => {
    // if running stop
    // if exists remove from payloads, and from tasks

})

ioClient.on('start', (payload) => {
    // if stoped start
})

ioClient.on('stop', (payload) => {
    // if running stop
})

