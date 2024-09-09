// please complete the implementation
class EventEmitter {
    listeners = new Map()
  
    subscribe(eventName, callback) {
        if (this.listeners.has(eventName)) {
        this.listeners.set(eventName, [...this.listeners.get(eventName), callback])
      } else {
        this.listeners.set(eventName, [callback])
      }
  
      let cbIndex = this.listeners.get(eventName).indexOf(callback)
  
      return {
        release: () => {
          this.listeners.get(eventName).splice(cbIndex, 1)
        }
      }
    }
    
    emit(eventName, ...args) {
        if (this.listeners.has(eventName)) {
        this.listeners.get(eventName).forEach(listener => listener(...args))
      }
    }
}

const callback1 = (...args) => {
  console.log(args)
}

const callback2 = (...args) => {
  console.log(args)
}

const emitter = new EventEmitter()
const sub1  = emitter.subscribe('event1', callback1)
const sub2 = emitter.subscribe('event2', callback2)
const sub3 = emitter.subscribe('event1', callback1)

emitter.emit('event1', 1, 2);

sub1.release()
sub3.release()