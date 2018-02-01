import './index.css';

let currentFile;

const createElement = function() {
    let element = document.createElement('div');
    element.className = 'throbbler';
    element.id = 'js-throbbler';
    return element;
};

export default class Throbbler {

    constructor() {
        this.visible = false;
        this.element = createElement();
        this.currentFile = this.getFilePath();
        this.element.style.background = this.getCssBackground();
        this.hide();
    }

    show() {
        this.regenerateFile();
        this.element.style.display = null;
        this.element.style.background = this.getCssBackground();
        this.visible = true;
    }

    hide() {
        this.element.style.display = 'none';
        this.visible = false;
    }

    getRandomDigit() {
        return ~~(Math.random() * 10);
    }

    getFilePath (digit) {
        if (!parseInt(digit)) {
            digit = this.getRandomDigit();
        }

        return './components/throbbler/img/loaders/' + digit + '.svg';
    };


    getCssBackground() {
        return 'url(' + this.currentFile + ') no-repeat center center';
    };

    getCurrentFile () {
        return this.currentFile;
    };


    regenerateFile() {
        this.currentFile = this.getFilePath();
        return currentFile;
    };

    isVisible() {
        return this.visible;
    }
}