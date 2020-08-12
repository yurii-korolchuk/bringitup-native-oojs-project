export default class LoadItems {
    constructor(containerSelector, itemsSelector, triggerSelector) {
        this.container = document.querySelector(containerSelector);
        this.trigger = this.container.querySelector(triggerSelector);
        this.itemsToShow = Array.from(this.container.querySelectorAll(itemsSelector)).filter(item => item !== this.trigger);
    }

    bindTrigger() {
        this.trigger.addEventListener('click', () => {
            if(this.itemsToShow.length > 1) {
                this.itemsToShow[0].style.display = 'flex';
                this.itemsToShow.shift();
            } else {
                this.itemsToShow[0].style.display = 'flex';
                this.trigger.remove();
            }
        })
    }

    init() {
        this.itemsToShow.forEach(item => {
            item.style.display = 'none';
            item.classList.add('animated', 'fadeInDown');
        })

        this.bindTrigger();
    }
}