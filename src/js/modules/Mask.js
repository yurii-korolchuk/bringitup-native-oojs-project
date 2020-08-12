export default class Mask {
    constructor(selector, mask) {
        this.container = document.querySelectorAll(selector);
        this.mask = mask;
    }

    setCursor(pos, elem) {
        elem.focus();

        if(elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if(elem.createTextRange) { // для IE 9 и ниже

            const range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    createMask(event) {
        const def = this.mask.replace(/\D/g, '');
        let val = event.target.value.replace(/\D/g, '');
        let i = 0;

        if(def.length >= val.length) val = def;

        event.target.value = this.mask.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if(event.type === 'blur') {
            event.target.value = event.target.value.length === 2 ? '' : event.target.value ;
        } else {
            this.setCursor(event.target.value.length, event.target);
        }
    }

    init() {
        this.container.forEach(item => {
            item.addEventListener('input', (e) => this.createMask(e));
            item.addEventListener('focus', (e) => this.createMask(e));
            item.addEventListener('blur', (e) => this.createMask(e));
        })
    }
}