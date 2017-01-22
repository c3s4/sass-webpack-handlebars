import AbstractComponent from '../AbstractComponent';
import SendBoxComponent from './sendBox/SendBoxComponent';
import * as chatTemplate from './chat.handlebars';

export default class ChatComponent extends AbstractComponent {
  constructor(initialContext) {
    super(initialContext);
    this._sendBoxComponent = new SendBoxComponent();
    this._context.sendBoxComponent = this._sendBoxComponent.html;
  }

  get html() {
    return chatTemplate(this._context);
  }

  onChildUpdate() {
    super.onChildUpdate();
  }


}