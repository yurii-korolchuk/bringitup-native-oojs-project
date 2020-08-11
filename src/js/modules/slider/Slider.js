export default class Slider {
    constructor({container = null, prevButton = null, nextButton = null, fadeIn = {} } = {}) {
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        if(Object.keys(fadeIn).length) this.fadeIn = fadeIn;
        try {
            this.nextButton = document.querySelectorAll(nextButton);            
            this.prevButton = document.querySelectorAll(prevButton);
        } catch(e) {}

        this.slideIndex = 0;
        this.slides.forEach(item => {
            item.classList.add('animated');
        })
    }

    showSlide(n) {
        this.slideIndex = n > this.slides.length - 1 ? 0 : n < 0 ? this.slides.length - 1 : n;

        this.slides.forEach((item, i) => {
            if(this.slideIndex == i) {
                if(this.fadeIn) item.classList.add(this.fadeIn.fadeInNext);
                item.style.display = 'block';
            } else {
                if(this.fadeIn) item.classList.remove(this.fadeIn.fadeInNext);
                item.style.display = 'none';
            }
        })
    }

    showNextSlide() {
        this.showSlide(this.slideIndex += 1);
    }

    showPrevSlide() {
        this.showSlide(this.slideIndex += -1);
    }

    bindAction(item, action, callback) {
        if(HTMLCollection.prototype.isPrototypeOf(item) || NodeList.prototype.isPrototypeOf(item) || Array.isArray(item)) {
            item.forEach(item => {
                item.addEventListener(action, callback);
            })
        } else {
            item.addEventListener(action, callback);
        }
    }

    render() {
        try {
            this.bindAction(this.nextButton, 'click', () => this.showNextSlide);
            this.bindAction(this.prevButton, 'click', () => this.showPrevSlide);
        } catch(e) {}
    }
}
