class Observable {
    subscribers = []

    constructor(setup) {
        this.cb = setup
    }
   
    subscribe(subscriber) {
        this.subscribers.push(subscriber)
        this.invoke()
        return { unsubscribe: this.unsubscribe.bind(this) }
    }

    invoke() {
        for (let sub of this.subscribers) {
            this.cb(sub)
        }
    }

    unsubscribe(subscriber) {
        this.subscribers.filter(sub => sub != subscriber)
    }
}

const observer = {
    next: (value) => {
       console.log('we got a value', value)
    },
    error: (error) => {
        console.log('we got an error', error)
    },
    complete: () => {
        console.log('ok, no more values')
    }
}

const observable = new Observable((subscriber)=> {
    subscriber.next(1)
    subscriber.next(2)
    setTimeout(() => {
        subscriber.next(3)
        subscriber.next(4)
        subscriber.complete()
    }, 1000)
})

const sub = observable.subscribe(observer)

