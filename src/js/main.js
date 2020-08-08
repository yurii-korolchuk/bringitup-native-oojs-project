import Slider from './modules/Slider';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next', '', '.home');
    slider.render();
});