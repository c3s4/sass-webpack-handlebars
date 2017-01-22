import AbstracComponent from '../../AbstractComponent';
import EventBus from '../../../bus/eventbus';
import Events from '../../../bus/events';
import * as sendBoxTemplate from './sendBox.handlebars';


export default class SendBoxComponent extends AbstracComponent{
  constructor() {
    super();
  }

  onRendered() {
    let textNode = document.querySelector('#msgText');
    document.querySelector('#sendButton').onclick = () => {
      EventBus.getInstance().post(Events.MSG.SENT, textNode.value);
    };
  }

  get html() {
    return sendBoxTemplate(this._context);
  }
}