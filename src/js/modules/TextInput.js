export default class TextInput {
    constructor(selector) {
        this.container = document.querySelectorAll(selector);
    }

    init() {
        this.container.forEach(item => {
            item.addEventListener('keypress', (e) => {
                if(e.key.match(/[^a-z]/ig)) {
                    e.preventDefault();
                }
            })
        })
    }
}