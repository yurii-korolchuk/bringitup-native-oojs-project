import Slider from './Slider';

export default class MainSlider extends Slider {
constructor({container, prevButton, nextButton, fadeInClass = 'fadeIn', resetButton = ""}) {
    super({container, prevButton, nextButton, fadeInClass});

        try {
            this.resetButton = document.querySelectorAll(resetButton);
        } catch(e) {}

    }

    showSlide(n) {
        this.slideIndex = n > this.slides.length - 1 ? 0 : n < 0 ? this.slides.length - 1 : n;

        this.slides.forEach((item, i) => {
            if(this.slideIndex == i) {
                item.classList.add(this.fadeInClass);
                item.style.display = 'block';

                if(item.classList.contains('modules')) {
                    setTimeout(() => {
                        if(item.style.display === 'block') {
                            try {
                                document.querySelector('.hanson').style.display = 'block';
                            } catch(e) {}
                        }
                    }, 3000)        
                }
            } else {
                item.classList.remove(this.fadeInClass);
                item.style.display = 'none';
            }
        })
    }    

    render() {
        try {
            this.nextButton.forEach(item => {
                item.addEventListener('click', () => {
                    this.showNextSlide();
                })
            })

            this.resetButton.forEach(item => {
                item.addEventListener('click', () => {
                    this.showSlide(0);
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