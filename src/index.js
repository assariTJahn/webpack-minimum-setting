import curtainStyle from './curtain/curtain.scss'
import curtainHtml from './curtain/curtain.html'
import curtainJs from './curtain/curtain.js'


function component() {
    var element = document.createElement('div');
    element.innerHTML = curtainHtml;
    
    return element;
}

document.body.appendChild(component());

