export default class Slider {
    constructor({container = ' ', prevButton = ' ', nextButton = ' ', fadeInClass = 'fadeIn'} = {}) {
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.fadeInClass = fadeInClass;
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
                item.classList.add(this.fadeInClass);
                item.style.display = 'block';
            } else {
                item.classList.remove(this.fadeInClass);
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

    render() {
        try {
            this.nextButton.forEach(item => {
                item.addEventListener('click', () => {
                    this.showNextSlide();
                })
            })
            this.prevButton.forEach(item => {
                item.addEventListener('click', () => {
                    this.showPrevSlide();
                })
            })
        } catch(e) {}
    }
}
