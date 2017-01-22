import AbstractComponent from './components/AbstractComponent';
import ChatComponent from './components/chat/ChatComponent';


class AppComponent extends AbstractComponent {
  constructor(onChildUpdateCallback) {
    super();
    this._onChildUpdateCallback = onChildUpdateCallback;
    this._chat = new ChatComponent({title: 'My super cool chat'});
    this._chat.addUpdateListener(this);
    // setInterval(this._chat.onChildUpdate.bind(this._chat), 1000);
  }

  onChildUpdate() {
    if (this._onChildUpdateCallback) {
      this._onChildUpdateCallback(this.html);
    }
  }

  get html() {
    return this._chat.html;
  }
}


let app = new AppComponent((newHtml) => {
  document.querySelector('#app').innerHTML = newHtml;  
});

document.querySelector('#app').innerHTML = app.html;
