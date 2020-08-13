export default class Form {
    constructor(submitSelector = null, itemsToCheck = [], path = 'assets/question.php') {
        this.submit = document.querySelector(submitSelector);
        this.itemsToCheck = itemsToCheck;
        this.path = path;
        this.error = false;
    }

    bindAction() {
        this.submit.addEventListener('submit', (e) => {
            e.preventDefault();
            for(let i = 0; i < this.itemsToCheck.length; i++) {
                if(!this.itemsToCheck[i].value.length) {
                    this.showErrorBorder(this.itemsToCheck[i]);
                    break;
                } else if(this.itemsToCheck[i].getAttribute('name') === 'phone' && this.itemsToCheck[i].value.length !== 15) {
                    this.showErrorBorder(this.itemsToCheck[i]);
                    break;
                } else if(this.itemsToCheck[i].style.border = '1px solid red') {
                    this.itemsToCheck[i].style.border = '';
                    if(i === this.itemsToCheck.length - 1) {
                        this.error = false;
                    }
                }
            }

            if(!this.error) {
                const data = new FormData(this.submit);

                this.postFormData(data)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                    .finally(() => {
                        console.log('finally')
                    })
            }
        })
    }

    showErrorBorder(item) {
        item.style.border = '1px solid red'
        this.error = true;
    }

    async postFormData (data) {
        const res = await fetch(this.path, {
            method: 'POST',
            body: data
        }) 
        return await res.text();
    };

    init() {
        this.bindAction();
    }
}