export default class VideoPlayer {
    constructor(containerSelector, triggerSelector, closeSelector) {
        this.container = document.querySelector(containerSelector);
        this.trigger = document.querySelector(triggerSelector);
        this.close = this.container.querySelector(closeSelector);

        this.container.classList.add('animated', 'fadeIn');

        this.trigger.addEventListener('click', () => {
            this.container.style.display = 'flex';
        })
    }
    
    bindOpenAndCloseTriggers() {
        this.trigger.addEventListener('click', () => {
            this.openOverlayWithVideo(this.trigger.getAttribute('data-url'));
        })

        this.close.addEventListener('click', () => {
            this.closeOverlayWithVideo();
        })

        this.container.addEventListener('click', (e) => {
            if(e.target && e.target === this.container) {
                this.closeOverlayWithVideo();
            }
        })
    }

    openOverlayWithVideo(url) {
        if(document.querySelector('iframe#frame')) {
            this.container.style.display = 'flex';
        } else {
            this.container.style.display = 'flex';
            
            this.player = new YT.Player('frame', {
                height: '100%',
                width: '100%',
                videoId: `${url}`
            });
        }
    }

    closeOverlayWithVideo() {
        this.container.style.display = '';
        this.player.stopVideo();
    }

    init() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindOpenAndCloseTriggers();
    }
}