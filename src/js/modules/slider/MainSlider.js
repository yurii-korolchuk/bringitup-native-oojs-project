import Slider from './Slider';

export default class MainSlider extends Slider {
constructor({container, prevButton, nextButton, fadeIn = {}, resetButton = null} = {}) {
    super({container, prevButton, nextButton, fadeIn});
        try {
            this.resetButton = document.querySelectorAll(resetButton);
        } catch(e) {}

    }

    showSlide(n) {
        this.slideIndex = n > this.slides.length - 1 ? 0 : n < 0 ? this.slides.length - 1 : n;

        this.slides.forEach((item, i) => {
            if(this.slideIndex == i) {
                if(this.fadeIn) item.classList.add(this.fadeIn.fadeInNext);
                item.style.display = 'block';

                if(item.classList.contains('modules')) {
                    setTimeout(() => {
                        if(item.style.display === 'block') {
                            try {
                                item.querySelector('.hanson').style.display = 'block';
                            } catch(e) {}
                        }
                    }, 3000)        
                }
            } else {
                if(this.fadeIn) item.classList.remove(this.fadeIn.fadeInNext);
                item.style.display = 'none';
            }
        })
    }    

    render() {
        try {
            this.bindAction(this.nextButton, 'click', () => this.showNextSlide());
            this.bindAction(this.resetButton, 'click', () => this.showSlide(0));
            this.bindAction(this.prevButton, 'click', () => this.showPrevSlide());
        } catch(e) {}
    }
}