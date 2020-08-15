import Slider from './Slider';

export default class MiniSlider extends Slider {
    constructor({container, prevButton = null, nextButton = null, activeClass = '', elementsToIgnore = '', fadeIn = {}, autoplay = false } = {}) {
        super({container, prevButton, nextButton, elementsToIgnore, fadeIn, autoplay});
        this.activeClass = activeClass;
        try {
            this.elementsToIgnore = this.container.querySelectorAll(elementsToIgnore);
        } catch(e) {}
    }   

    showNextSlide(click) {
        if(click && this.autoplay) {
            clearInterval(this.auto)
        }
        const {elementsToIgnore, slides, container, fadeIn, activeClass} = this;

        if(elementsToIgnore) elementsToIgnore.forEach(item => {
            if(slides[1] === item) {
                container.appendChild(item);
            }
        })

        container.appendChild(slides[0]);
        if(fadeIn) {
            slides.forEach(item => {
                item.classList.remove(activeClass, fadeIn.fadeInNext, fadeIn.fadeInPrev)
            })
            slides[0].classList.add(activeClass, fadeIn.fadeInNext)
        } else {
            slides.forEach(item => {
                item.classList.remove(activeClass)
            })
            slides[0].classList.add(activeClass)
        }
    }

    showPrevSlide(click) {
        if(click && this.autoplay) {
            clearInterval(this.auto)
        }
        const {elementsToIgnore, slides, container, fadeIn, activeClass} = this;

        if(elementsToIgnore) Array.from(elementsToIgnore).reverse().forEach(item => {
            if(slides[slides.length - 1] === item) {
                container.insertBefore(item, slides[0]);
            }
        })
        
        if(fadeIn) {
            container.insertBefore(slides[slides.length - 1], slides[0]);
            slides.forEach(item => {
                item.classList.remove(activeClass, fadeIn.fadeInPrev, fadeIn.fadeInNext)
            })
            slides[0].classList.add(activeClass, fadeIn.fadeInPrev)
        } else {
            container.insertBefore(slides[slides.length - 1], slides[0]);
            slides.forEach(item => {
                item.classList.remove(activeClass)
            })
            slides[0].classList.add(activeClass)
        }
    }

    render() {
        if(this.container) {
            this.container.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            overflow: hidden;
            `;
        }

        try {
            this.bindAction(this.nextButton, 'click', () => this.showNextSlide(true));
            this.bindAction(this.prevButton, 'click', () => this.showPrevSlide(true));

            if(this.autoplay) {
                this.auto = setInterval(() => {
                    this.showNextSlide();
                }, 6500)
            }
        } catch(e) {}
    }
}