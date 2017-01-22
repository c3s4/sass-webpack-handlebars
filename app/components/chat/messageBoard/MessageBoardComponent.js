import AbstractComponent from '../../AbstractComponent';
import * as messageBoardTemplate from './messageBoard.handlebars';

export default class MessageBoardComponent extends AbstractComponent {
  constructor(initialContext) {
    super(initialContext);
  }

  get html() {
    return messageBoardTemplate(this._context);
  }

}