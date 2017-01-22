import * as template from './components/chat/chat.handlebars';

let html = template();

document.querySelector('#app').innerHTML = html;