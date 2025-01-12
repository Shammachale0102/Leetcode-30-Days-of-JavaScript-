/*Event Emitter:

Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them. */
class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    /**
     * Subscribes a callback to an event.
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []); 
        }
        const callbacks = this.events.get(eventName);
        callbacks.push(callback); 

        return {
            unsubscribe: () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1) {
                    callbacks.splice(index, 1); 
                }
            },
        };
    }

    /**
     * Emits an event, calling all subscribed callbacks with the given arguments.
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) {
            return []; 
        }
        const callbacks = this.events.get(eventName);
        return callbacks.map((callback) => callback(...args)); 
    }
}

