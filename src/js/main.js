import MainSlider from './modules/slider/MainSlider';
import VideoPlayer from './modules/VideoPlayer';
import MiniSlider from './modules/slider/MiniSlider';
import LoadItems from './modules/LoadItems';
import Mask from './modules/Mask';
import TextInput from './modules/TextInput';
import Form from './modules/Form';

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

    const loadBefore = new LoadItems('.officerold', '.officer__card-item', '.officer__card-show').init();
    const loadNew = new LoadItems('.officernew', '.officer__card-item', '.officer__card-show').init();
    const mask = new Mask('input[name=phone]', '+1 (___) __-___').init();
    const emailInput = new TextInput('input[type=email]').init();
    const nameInput = new TextInput('input[name=name]').init();

    const inputs = Array.from(document.querySelectorAll('.join__evolution .form__block input'));

    const mainForm = new Form('.join .form', inputs).init();
});