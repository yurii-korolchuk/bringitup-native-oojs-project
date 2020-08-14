export default class Form {
    constructor(containerSelector = null, path = 'assets/question.php') {
        this.container = document.querySelector(containerSelector);
        this.itemsToCheck = Array.from(this.container.querySelectorAll('input')).filter(item => item.dataset.required)
        this.path = path;
        this.error = false;
    }

    bindAction() {
        this.container.addEventListener('submit', (e) => {
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
                const data = new FormData(this.container);
        
                const statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    display: flex;
                    justify-content: flex-start;
                    font-size: 15px;
                    font-weight: 900;
                    color: #fff;
                `;
                statusMessage.classList.add('animated', 'fadeIn');
                statusMessage.textContent = 'Please wait while we are processing your data...';
                
                this.container.appendChild(statusMessage);

                this.postFormData(data)
                    .then(res => {
                        statusMessage.textContent = 'Thank you! You\'re all set.';
                    })
                    .catch(error => {
                        statusMessage.textContent = 'Oops, something went wrong! Try again, please.';
                    })
                    .finally(() => {
                        setTimeout(() => {
                            statusMessage.classList.remove('fadeIn');
                            statusMessage.classList.add('fadeOut');
                            setTimeout(() => {
                                statusMessage.remove();
                            }, 400);
                        }, 5000);
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