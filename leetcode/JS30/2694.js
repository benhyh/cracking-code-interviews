class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const listeners = this.events.get(eventName);
    listeners.push(callback);

    return {
      unsubscribe: () => {
        const index = listeners.indexOf(callback);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events.has(eventName)) {
      return [];
    }

    const listeners = this.events.get(eventName);
    const res = [];

    for (const listener of listeners) {
      res.push(listener(...args));
    }

    return res;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

/**
 * Map is a built-in data structure to store key-value pairs.
 * Similiar to an object, different in that you can story any value.
 * In the context of this proble, we are using Map to store the events as keys and arrays of callbacks as values.
 */

/**
 * Arguments are values that you pass into a function. They represent the input data requried for the function to perform its task.
 * Values that can be passed as arguments include:
 * 1. Primitive numbers (numbers, strings, boolean, null, undefined)
 * 2. Objects (including arrays, functions, and other complex data structures)
 * 3. Reference to variables.
 */
