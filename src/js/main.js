import Slider from './modules/Slider';
import VideoPlayer from './modules/VideoPlayer';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next', '', '.home');
    slider.render();

    const player = new VideoPlayer('.overlay', '.play', '.overlay .close');
    player.init();
});