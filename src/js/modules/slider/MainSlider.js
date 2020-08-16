import Slider from './Slider';

export default class MainSlider extends Slider {
constructor({container, prevButton, nextButton, fadeIn = {}, resetButton = null} = {}) {
    super({container, prevButton, nextButton, fadeIn});
        try {
            this.resetButton = document.querySelectorAll(resetButton);
        } catch(e) {}
    }

    showSlide(n) {
        let className;
        if(this.fadeIn) className = n === -1 ? this.fadeIn.fadeInPrev : this.fadeIn.fadeInNext;
        this.slideIndex += n;
        this.slideIndex = this.slideIndex < 0 ? this.slides.length - 1 : this.slideIndex > this.slides.length - 1 ? 0 : this.slideIndex; 
        if(n === 0) this.slideIndex = 0;
        this.slides.forEach((item, i) => {
            if(this.slideIndex === i) {
                if(this.fadeIn) {
                    item.classList.add(className);
                }
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
                if(this.fadeIn) item.classList.remove(this.fadeIn.fadeInNext, this.fadeIn.fadeInPrev);
                item.style.display = 'none';
            }
        })
    }    

    render() {
        if(this.container) {
            this.bindAction(this.nextButton, 'click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.showNextSlide();
            });
            this.bindAction(this.resetButton, 'click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.showSlide(0)
            });
            this.bindAction(this.prevButton, 'click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.showPrevSlide()
            });
        }
    }
}