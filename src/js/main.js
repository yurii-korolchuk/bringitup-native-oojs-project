import MainSlider from './modules/slider/MainSlider';
import VideoPlayer from './modules/VideoPlayer';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        container: '.page', 
        nextButton: '.next', 
        fadeInClass: 'fadeInUp',
        resetButton: '.home'
    });
    slider.render();

    const player = new VideoPlayer('.overlay', '.play', '.overlay .close');
    player.init();
});