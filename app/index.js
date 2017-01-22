import AbstractComponent from './components/AbstractComponent';
import ChatComponent from './components/chat/ChatComponent';




class AppComponent extends AbstractComponent {
  constructor() {
    super();
    this._chat = new ChatComponent();
    this._chat.addUpdateListener(this);
    setInterval(this._chat.onChildUpdate.bind(this._chat), 1000);
  }

  onChildUpdate() {
    document.querySelector('#app').innerHTML = this.html;    
  }

  get html() {
    return this._chat.html;
  }
}


let app = new AppComponent();
document.querySelector('#app').innerHTML = app.html;

