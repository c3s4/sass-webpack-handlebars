import AbstractComponent from '../AbstractComponent';
import SendBox from './sendBox/SendBox';
import * as chatTemplate from './chat.handlebars';

export default class ChatComponent extends AbstractComponent {
  constructor(initialContext) {
    super(initialContext);
    this._sendBoxComponent = new SendBox();
    this._context.sendBoxComponent = this._sendBoxComponent.html;
  }

  get html() {
    return chatTemplate(this._context);
  }

  onChildUpdate() {
    super.onChildUpdate();
  }


}