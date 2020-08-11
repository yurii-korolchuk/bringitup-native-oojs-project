import Slider from './Slider';

export default class MiniSlider extends Slider {
    constructor({container, prevButton = null, nextButton = null, activeClass = '', elementsToIgnore = '', fadeIn = {} } = {}) {
        super({container, prevButton, nextButton, elementsToIgnore, fadeIn});
        this.activeClass = activeClass;
        if(elementsToIgnore.length) this.elementsToIgnore = this.container.querySelectorAll(elementsToIgnore);
    }   

    showNextSlide() {
        if(this.elementsToIgnore) this.elementsToIgnore.forEach(item => {
            if(this.slides[1] === item) {
                this.container.appendChild(item);
            }
        })
        console.log(this.slides)

        this.container.appendChild(this.slides[0]);
        if(this.fadeIn) {
            this.slides.forEach(item => {
                item.classList.remove(this.activeClass, this.fadeIn.fadeInNext, this.fadeIn.fadeInPrev)
            })
            this.slides[0].classList.add(this.activeClass, this.fadeIn.fadeInNext)
        } else {
            this.slides.forEach(item => {
                item.classList.remove(this.activeClass)
            })
            this.slides[0].classList.add(this.activeClass)
        }
    }

    showPrevSlide() {
        if(this.elementsToIgnore) for(let i = this.elementsToIgnore.length - 1; i >= 0; i--) {
            if(this.slides[this.slides.length - 1] === this.elementsToIgnore[i]) {
                this.container.insertBefore(this.elementsToIgnore[i], this.slides[0]);
            }
        }
        
        console.log(this.slides)
        if(this.fadeIn) {
            this.container.insertBefore(this.slides[this.slides.length - 1], this.slides[0]);
            this.slides.forEach(item => {
                item.classList.remove(this.activeClass, this.fadeIn.fadeInPrev, this.fadeIn.fadeInNext)
            })
            this.slides[0].classList.add(this.activeClass, this.fadeIn.fadeInPrev)
        } else {
            this.container.insertBefore(this.slides[this.slides.length - 1], this.slides[0]);
            this.slides.forEach(item => {
                item.classList.remove(this.activeClass)
            })
            this.slides[0].classList.add(this.activeClass)
        }
    }

    render() {
        this.container.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            overflow: hidden;
        `;
        this.bindAction(this.nextButton, 'click', () => this.showNextSlide());
        this.bindAction(this.prevButton, 'click', () => this.showPrevSlide());
        console.log(this.slides)
    }
}