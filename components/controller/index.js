import Throbbler from './../throbbler';
import './index.css';
import template from './index.html';

let inDom = false;

export default class Controller
{
    constructor(throbbler)
    {
        this.throbbler = new Throbbler();
        this.element = document.createElement('div');
        this.element.className = 'controller';
        this.element.innerHTML = template;
        this.startButton = this.element.querySelector('#js-start-app');
        this.stopButton = this.element.querySelector('#js-stop-app');
        this.startButton.onclick = () => this.show();
        this.stopButton.onclick = () => this.hide();
        this.redraw();
    }

    show() {
        if (!inDom) {
            this.element.querySelector('.throbbler-container').appendChild(this.throbbler.element);
            inDom = true;
        }

        this.throbbler.show();
        this.redraw();
    }

    hide() {
        this.throbbler.hide();
        this.redraw();
    }

    redraw() {
        this.startButton.disabled = this.throbbler.isVisible();
        this.stopButton.disabled = !this.throbbler.isVisible();
    }
}