import AbstractComponent from '../AbstractComponent';
import SendBoxComponent from './sendBox/SendBoxComponent';
import MessageBoardComponent from './messageBoard/MessageBoardComponent';
import * as chatTemplate from './chat.handlebars';
import './chatComponent.scss';

export default class ChatComponent extends AbstractComponent {
  constructor(initialContext) {
    super(initialContext);
    this._sendBoxComponent = new SendBoxComponent();
    let initialMsgBoardCtx = {messages: [{messageContent: 'ciao'}, {messageContent: 'ciao a te'}, {messageContent: 'come stai?'}]};
    this._messageBoardComponent = new MessageBoardComponent(initialMsgBoardCtx);
    this._messageBoardComponent.addUpdateListener(this);
    this._context.sendBoxComponent = this._sendBoxComponent.html;
    this._context.messageBoardComponent = this._messageBoardComponent.html;

    this.addChild(this._messageBoardComponent);
    this.addChild(this._sendBoxComponent);
  }

  onChildUpdate() {
    this._context.messageBoardComponent = this._messageBoardComponent.html;
    this.notifyListeners();
  }

  get html() {
    return chatTemplate(this._context);
  }


}