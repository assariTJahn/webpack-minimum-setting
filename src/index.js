import Container from './init.js';
import layout from './layout/layout.scss';
import curtainHtml from './curtain/index.js';
import rotateHtml from './rotate/index.js';

function component(section) {
    var element = document.createElement('div');
    element.className = 'section';
    element.id = section.id||'';
    element.innerHTML = section.content;
    
    return element;
}
var container = new Container(document);
container.addSection(rotateHtml);
container.addSection(curtainHtml);

