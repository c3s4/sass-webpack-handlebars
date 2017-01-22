/**
 * Class implementing listenable.
 */
class Listenable {

  /**
   * Create a Listenable
   * @constructor
   */
  constructor() {
    this._listeners = [];
  }

  /**
   * Return empty list of listeners
   * @returns {Array}
   */
  static get EMPTY() {
    return EMPTY_LISTENABLE;
  }

  /**
   * Add listener into listenable
   * @param listener
   */
  addListener(listener) {
    this._listeners.push(listener);
    return this._createUnregisterHandler(listener);
  }

  addOnceListener(listener) {
    const unregister = this.addListener(function(...params) {
      Listenable._callListener(listener, params);
      unregister();
    });

    return unregister;
  }

  /**
   * Notify all listeners
   * @param params
   */
  notifyListeners(...params) {
    this._callListeners(params);
  }

  /**
   * Used for notify all listener
   * @param params
   */
  _callListeners(params) {
    this._listeners.forEach((listener) => {
      Listenable._callListener(listener, params);
    });
  }

  /**
   * Notify single listener with arguments
   * @param listener
   * @param args
   * @private
   */
  static _callListener(listener, args) {
    try {
      listener.apply(listener, args);
    } catch (err) {
      console.warn("Error while calling listener " + listener);
      console.error(err.stack || err);
    }
  }

  _createUnregisterHandler(listener) {
    var array = this._listeners;
    return function() {
      const index = array.indexOf(listener);
      if (index >= 0) {
        array.splice(index, 1);
      }
    };
  }
}

const NULL_FUNCTION = function() {};

class EmptyListenable {

  addListener() {
    return NULL_FUNCTION;
  }

  addOnceListener() {
    return NULL_FUNCTION;
  }

  notifyListeners() {}
}

const EMPTY_LISTENABLE = new EmptyListenable();

export default Listenable;
