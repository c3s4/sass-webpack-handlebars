import AbstractComponent from '../../AbstractComponent';
import EventBus from '../../../bus/eventbus';
import Events from '../../../bus/events';

import * as messageBoardTemplate from './messageBoard.handlebars';

export default class MessageBoardComponent extends AbstractComponent {
  constructor(initialContext) {
    super(initialContext);
    EventBus.getInstance().register(Events.MSG.SENT, (msg) => {
      this._context.messages.push({ messageContent: msg });
      this.notifyListeners();
    });
  }

  get html() {
    return messageBoardTemplate(this._context);
  }

}