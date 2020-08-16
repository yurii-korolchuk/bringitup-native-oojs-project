export default class Download {
    constructor(triggetSelector, path = 'assets/img/Bitmap.jpg') {
        this.trigger = document.querySelectorAll(triggetSelector);
        this.path = path;
    }

    bindTrigger() {
        this.trigger.forEach(item => {
            item.addEventListener('click', () => {
                this.downloadItem();
            })
        })
    }

    downloadItem() {
        const tmp = document.createElement('a');
        tmp.setAttribute('href', this.path);
        tmp.setAttribute('download', 'pdf');
        document.body.appendChild(tmp);
        tmp.click();
        tmp.remove();
    }

    init() {
        this.bindTrigger();
    }
}