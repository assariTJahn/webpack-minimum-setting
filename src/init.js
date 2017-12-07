import _ from 'lodash';

export default function Container(doc) {
    var oSection = {};
    var document = doc;
    var container = null;

    var createElement = function (strTagname) {
        return document.createElement(strTagname);
    }
    container = createElement('div');
    container.className = 'container';
    document.body.appendChild(container);


    var appendChild = function (target, child){
        if(typeof child.content == 'string'){
            target.innerHTML = child.content;
        }else{
            target.appendChild(child.content);
        }
    }

    this.addSection = function (oElm) {
        if (typeof oElm == 'object') {
            oSection[oElm.id] = oElm;
            var section = createElement('section');
            appendChild(section, oElm);
            section.id = oElm.id || '';
            section.className = oElm.className || '';
            container.appendChild(section);
        }
    }

    return this;
}