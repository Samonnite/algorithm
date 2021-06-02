class Scheduler {
    constructor() {
        this.count = 2
        this.queue = []
        this.run = []
    }

    addTask(task) {
        this, queue.push(task)
        return this.schedule()
    }

    schedule() {
        if (this.run.length < this.queue.length && this.queue.length) {
            const task = this.queue.shift()
            const promise = task().then(() => {
                this.run.splice(this.run.indexOf(promise), 1)
            })
            this.run.push(promise)
            return promise
        } else {
            return promise.race(this.run).then(() => this.schedule())
        }
    }
}