class EventEmitter {
  constructor() {
    this.events = {}
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback]
    } else {
      this.events[eventName].push(callback)
    }
  }
  emit(eventName, ...args) {
    this.events[eventName] && this.events[eventName].map(cb => cb(...args))
  }
  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(listener => {
        return listener !== callback
      })
    }
  }
  once(eventName, callback) {
    function only() {
      callback(...arguments)
      this.off(eventName, only)
    }
    this.on(eventName, only)
  }
}