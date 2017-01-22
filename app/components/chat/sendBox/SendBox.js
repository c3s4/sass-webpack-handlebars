import AbstracComponent from '../../AbstractComponent';
import * as sendBoxTemplate from './sendBox.handlebars';


export default class SendBox extends AbstracComponent{
  constructor() {
    super();
  }

  get html() {
    return sendBoxTemplate(this._context);
  }
}