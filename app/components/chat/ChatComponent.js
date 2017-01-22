import AbstractComponent from '../AbstractComponent';
import SendBoxComponent from './sendBox/SendBoxComponent';
import MessageBoardComponent from './messageBoard/MessageBoardComponent';
import * as chatTemplate from './chat.handlebars';

export default class ChatComponent extends AbstractComponent {
  constructor(initialContext) {
    super(initialContext);
    this._sendBoxComponent = new SendBoxComponent();
    let initialMsgBoardCtx = {messages: [{messageContent: 'ciao'}, {messageContent: 'ciao a te'}, {messageContent: 'come stai?'}]};
    this._messageBoardComponent = new MessageBoardComponent(initialMsgBoardCtx);
    this._context.sendBoxComponent = this._sendBoxComponent.html;
    this._context.messageBoardComponent = this._messageBoardComponent.html;
  }

  get html() {
    return chatTemplate(this._context);
  }

  onChildUpdate() {
    super.onChildUpdate();
  }


}