export default class TextInput {
    constructor(selector) {
        this.container = document.querySelectorAll(selector);
    }

    init() {
        this.container.forEach(item => {
            item.addEventListener('keypress', (e) => {
                const regExp = item.getAttribute('type') === 'email' ? /[^a-z0-9@\.]/ig : /[^a-z]/ig;
                if(e.key.match(regExp)) e.preventDefault();
            })
        })
    }
}