import Listenable from "./listenable";
import Events from './events';

/**
 * Class implementing an event bus.
 * The event bus is used to pass events among the diverse modules of the livecst.
 * It is preferable to use it instead of launching events on the window element for code readibility.
 */

let instance = null;

class EventBus {

  /**
   * Create an EventBus
   * @constructor
   */
  constructor() {
    this._listeners = {};
  }

  static getInstance() {
    if (!instance) {
      instance = new EventBus();
    }

    return instance;
  }

  get events() {
    return Events;
  }

  static get events() {
    return Events;
  }
  /**
   * register - Register a listener to a given event type
   *
   * @param {string} eventType the event type to which you want to subscribe
   * @param {function} listener  the function to be executed once the given event is fired
   *
   * @returns {function} call this when you want to remove (unsubscribe) the listener function
   */
  register(eventType, listener) {
    this._createListenableIfNeeded(eventType);
    return this._listeners[eventType].addListener(listener);
  }

  _createListenableIfNeeded(eventType) {

    if (this._listeners[eventType] == null) {
      this._listeners[eventType] = new Listenable();
    }

  }

  /**
   * Post an event throught the event bus.
   * All the listener registered to that event type will be notified.
   *
   * @param  {String} eventType The event type
   * @param  {Array} params parameters that will be passed to the listeners
   */
  post(eventType, ...params) {
    const listenable = this._listenersFor(eventType);
    listenable.notifyListeners.apply(listenable, params);
  }

  _listenersFor(eventType) {
    return this._listeners[eventType] || Listenable.EMPTY;
  }

}

export default EventBus;
