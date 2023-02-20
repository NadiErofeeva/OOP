'use strict';

const DomElement = function (selector, height, width, bg, fontSize, css = '') {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.css = css;

    this.element = undefined;
    this.createDomElement = function () {
        if (this.selector[0] === '.' || this.selector[0] === '#') {
            if (this.selector[0] === '.') {
                this.element = document.createElement('div');
                this.element.classList = this.selector.substring(1);
            } else if (this.selector[0] === '#') {
                this.element = document.createElement('p');
                this.element.id = this.selector.substring(1);
            }
            this.element.style.cssText = `
            height: ${this.height};
            width: ${this.width};
            background: ${this.bg};
            font-size: ${this.fontSize};
            ${this.css}
            `;
            document.body.before(this.element);
        }
    }

    this.up = function () {
        if (isNaN(parseInt(this.element.style.top))) {
            this.element.style.top = '-10px';
        } else {
            this.element.style.top = (parseInt(this.element.style.top) - 10) + 'px';
        }

    }
    this.left = function () {
        if (isNaN(parseInt(this.element.style.left))) {
            this.element.style.left = '-10px';
        } else {
            this.element.style.left = (parseInt(this.element.style.left) - 10) + 'px';
        }
    }
    this.down = function () {
        if (isNaN(parseInt(this.element.style.top))) {
            this.element.style.top = '10px';
        } else {
            this.element.style.top = (parseInt(this.element.style.top) + 10) + 'px';
        }
    }
    this.right = function () {
        if (isNaN(parseInt(this.element.style.left))) {
            this.element.style.left = '10px';
        } else {
            this.element.style.left = (parseInt(this.element.style.left) + 10) + 'px';
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const newElem = new DomElement('.div', '100px', '100px', 'red', '16px', 'position: absolute;');
    newElem.createDomElement();

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowUp') {
            newElem.up();
        } else if (e.key === 'ArrowLeft') {
            newElem.left();
        } else if (e.key === 'ArrowDown') {
            newElem.down();
        } else if (e.key === 'ArrowRight') {
            newElem.right();
        }
    })
});
