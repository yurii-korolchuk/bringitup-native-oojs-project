import MainSlider from './modules/slider/MainSlider';
import VideoPlayer from './modules/VideoPlayer';
import MiniSlider from './modules/slider/MiniSlider';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        container: '.page', 
        nextButton: '.next', 
        fadeInClass: 'fadeInUp',
        resetButton: '.home',
        fadeIn: {
            fadeInNext: 'fadeInUp'
        }
    }).render();

    const showupSlider = new MiniSlider({
        container: '.showup__content-slider',
        nextButton: '.showup__next',
        prevButton: '.showup__prev',
        activeClass: 'card-active',
        fadeIn: {
            fadeInNext: 'fadeInRight',
            fadeInPrev: 'fadeInLeft'
        }
    }).render();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        nextButton: '.slick-next',
        prevButton: '.slick-prev',
        activeClass: 'card-active',
        elementsToIgnore: 'button',
        fadeIn: {
            fadeInNext: 'fadeInRight',
            fadeInPrev: 'fadeInLeft'
        },
        autoplay: true
    }).render();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        nextButton: '.slick-next',
        prevButton: '.slick-prev',
        activeClass: 'feed__item-active',
        elementsToIgnore: 'button'
    }).render();

    const player = new VideoPlayer('.overlay', '.play', '.overlay .close').init();
});