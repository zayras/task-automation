const fs = require('fs')
const Scheduler = require('cron').CronJob
const SSHService = require('./ssh.service')
const { Task } = require('../models')


const SchedudledTasks = new Map() // id and object
const SchedudledJobs = new Map() // object and cronjob

exports.push = (task) => {
    // check if its an update or create
    if (SchedudledTasks.has(task.id)) {
        // stop the task
        SchedudledJobs.get(SchedudledTasks.get(task.id)).stop()
        // remove the job
        SchedudledJobs.delete(SchedudledTasks.get(task.id))
    }
    // set task
    SchedudledTasks.set(task.id, task)
    // create new job
    let job = new Scheduler(task.criteria, () => {
        console.log(`Running task : ${JSON.stringify(task)}`)
        SSHService.execute(task)
    })
    // add new job
    SchedudledJobs.set(task, job)
    // if set to run
    if (task.active) SchedudledJobs.get(task).start()
}

exports.pop = (id) => {
    SchedudledJobs.get(SchedudledTasks.get(id)).stop()
    SchedudledJobs.delete(SchedudledTasks.get(id))
    SchedudledTasks.delete(id)
}

exports.start = (id) => {
    SchedudledJobs.get(SchedudledTasks.get(id)).start()
}

exports.stop = (id) => {
    SchedudledJobs.get(SchedudledTasks.get(id)).stop()
}

exports.init = () => {
    // read from db
    // run if set to run
    Task.findAll().then((tasks) => {
        tasks.forEach(task => {
            // let s = JSON.stringify(task, null, 2)

            SchedudledTasks.set(task.id, task)
            // create new job
            let job = new Scheduler(task.criteria, () => {
                console.log(`Setting task : ${JSON.stringify(task)}`)
                SSHService.execute(task)
            })
            // add new job
            SchedudledJobs.set(task, job)
            // if set to run
            if (task.active) SchedudledJobs.get(task).start()
        })
    })
}