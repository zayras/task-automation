const Scheduler = require('cron').CronJob
const SSHService = require('../services/ssh.service')
const { Runs } = require('../models')

var SchedudledTasks = new Map()

exports.push = (payload) => {
    // if running pause, then update and run agian
    let schedule = new Scheduler(payload.criteria, (payload) => {
        console.log('Running Task' + payload);
        // SSHService.execute()
        // Runs.save()
    })
    SchedudledTasks.set(payload.id, schedule)
}

exports.pop = (payload) => {
    // if running stop, then delete
    SchedudledTasks.get(payload).stop()
    SchedudledTasks.delete(payload)
}

exports.istaatu = (payload) => {
    SchedudledTasks.get(payload).start()
}

exports.stop = (payload) => {
    SchedudledTasks.get(payload).stop()
}

