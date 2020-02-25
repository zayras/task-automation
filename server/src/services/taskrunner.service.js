const Scheduler = require('cron').CronJob
// const SSHService = require('../services/ssh.service')
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
        // SSHService.execute()
        // Runs.save()
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
            const cleaned = {
                id: task.id,
                name: task.name,
                username: task.username,
                password: task.password,
                remote: task.remote,
                port: task.port,
                criteria: task.criteria,
                commands: task.commands,
                delay: task.delay,
                active: task.active
            }
            console.log(cleaned)
            // create new cronjob
            let job = new Scheduler(cleaned.criteria, () => {
                console.log(`Running task : ${JSON.stringify(cleaned)}`)
            })
            if (cleaned.active) job.start()
            SchedudledTasks.set(cleaned.id, cleaned)
            SchedudledJobs.set(cleaned, job)
        })
    })
}