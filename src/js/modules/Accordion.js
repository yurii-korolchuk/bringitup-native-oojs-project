export default class Accordion {
    constructor(btnSelector) {
        try {
            this.btns = document.querySelectorAll(btnSelector);
        } catch(e) {}
    }

    bindBtns() {
        if(this.btns) {
            this.btns.forEach(item => {
                item.nextElementSibling.style.display = 'none';
                item.nextElementSibling.classList.add('animated');
        
                item.addEventListener('click', () => {
                    if(item.classList.contains('active')) {
                        this.closeItem(item);
                    } else {
                        this.openItem(item);
                    }
                })
            })
        }
    }

    closeItem(item) {
        item.classList.remove('active');
        item.nextElementSibling.classList.remove('fadeInUp');
        item.nextElementSibling.classList.add('fadeOut');
        setTimeout(() => {
            item.nextElementSibling.style.display = 'none';
        }, 400);
    }

    openItem(item) {
        item.classList.add('active');
        item.nextElementSibling.classList.remove('fadeOut');
        item.nextElementSibling.classList.add('fadeInUp'); 
        item.nextElementSibling.style.display = 'block';
    }

    init() {
        this.bindBtns();
    }
}