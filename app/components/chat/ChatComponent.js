import AbstractComponent from '../AbstractComponent';
import * as chatTemplate from './chat.handlebars';

export default class ChatComponent extends AbstractComponent {
  constructor() {
    super();
    this._context = {};
    this._context.title = 'prova';
  }

  get html() {
    return chatTemplate(this._context);
  }

  onChildUpdate() {
    this._context.title = new Date().toString();
    super.onChildUpdate();
  }


}