export default class AbstractComponent {
  constructor(initialContext = {}) {
    if (new.target === AbstractComponent) {
      throw new TypeError("Cannot construct Interface instances directly");
    }
    this._updateListeners = [];
    this._childrenList = [];
    this._context = initialContext;
  }

  /**
   * This to get html string from handlebar template with the
   * appropriate context.
   * 
   */
  get html() {
    throw new Error("AbstractComponent: Method html");
  }

  /**
   * This is called by a listened component to be
   * notified that some change happened.
   * 
   * Here we can do somethig like update context or
   * directly update innerHTML if I am a root component
   * 
   */
  onChildUpdate() {
    this.notifyListeners();
  }

  onRendered() {
    this._childrenList.forEach((child) => {
      child.onRendered();
    });
  }

  notifyListeners() {
    this._updateListeners.forEach((listener) => {
      listener.onChildUpdate();
    });
  }

  addUpdateListener(listener) {
    if (listener instanceof AbstractComponent) {
      this._updateListeners.push(listener);
    } else {
      throw new TypeError("You cannot add a lister of type: " + listener.constructor);
    }
  }

  addChild(child) {
    if (child instanceof AbstractComponent) {
      this._childrenList.push(child);
    } else {
      throw new TypeError("You cannot add a lister of type: " + child.constructor);
    }
  }

}
