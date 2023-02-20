'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.createDomElement = function () {
        if (this.selector[0] === '.' || this.selector[0] === '#') {
            let element;
            if (this.selector[0] === '.') {
                element = document.createElement('div');
                element.classList = this.selector.substring(1);
            } else if (this.selector[0] === '#') {
                element = document.createElement('p');
                element.id = this.selector.substring(1);
            }
            element.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            font-size: ${this.fontSize};
            `;
            document.body.before(element);
        }

    }
}

const newElem = new DomElement('.div', '30px', '50px', 'red', '16px');

newElem.createDomElement();

console.log(newElem);