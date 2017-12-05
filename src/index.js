import printMe from './print.js';
import curtainStyle from './curtain/curtain.scss'
import curtainHtml from './curtain/curtain.html'
import curtainJs from './curtain/curtain.js'

import { cube } from './math';

function component() {
    var element = document.createElement('pre');

    // element.innerHTML = ['Hello webpack', '5cubed is equal to ' + cube(5)].join('\n\n');
element.innerHTML = curtainHtml;
    
    return element;
}

document.body.appendChild(component());

