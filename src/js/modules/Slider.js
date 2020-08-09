export default class Slider {
    constructor(containerSelector, nextButtonSelector, prevButtonSelector, resetButtonSelector) {
        this.container = document.querySelector(containerSelector);
        this.slides = this.container.children;
        if(nextButtonSelector && nextButtonSelector !== '') this.nextButton = document.querySelectorAll(nextButtonSelector);
        if(prevButtonSelector && prevButtonSelector !== '') this.prevButton = document.querySelectorAll(prevButtonSelector);
        if(resetButtonSelector) this.resetButton = document.querySelectorAll(resetButtonSelector);
        this.slideIndex = 0;

        this.slides.forEach(item => {
            item.classList.add('animated');
        })
    }

    showSlide(n) {
        this.slideIndex = n > this.slides.length - 1 ? 0 : n < 0 ? this.slides.length - 1 : n;

        this.slides.forEach((item, i) => {
            if(this.slideIndex == i) {
                item.classList.add('fadeInUp');
                item.style.display = 'block';
                if(item.classList.contains('modules')) {
                    const showHanson = setTimeout(() => {
                        if(item.style.display === 'block') item.querySelector('.hanson').style.display = 'block';
                    }, 3000)
                }
            } else {
                item.classList.remove('fadeInDown');
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
            if(this.nextButton) this.nextButton.forEach(item => {
                item.addEventListener('click', () => {
                    this.showNextSlide();
                })
            })
            if(this.prevButton) this.prevButton.forEach(item => {
                item.addEventListener('click', () => {
                    this.showPrevSlide();
                })
            })
            if(this.resetButton) this.resetButton.forEach(item => {
                item.addEventListener('click', () => {
                    this.showSlide(this.slideIndex += -this.slideIndex);
                })
            })
        } catch(e) {}
    }
}
