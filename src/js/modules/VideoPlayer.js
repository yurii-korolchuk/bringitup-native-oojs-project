export default class VideoPlayer {
    constructor(containerSelector, triggerSelector, closeSelector) {
        this.container = document.querySelector(containerSelector);
        this.trigger = document.querySelectorAll(triggerSelector);
        this.close = this.container.querySelector(closeSelector);

        this.container.classList.add('animated', 'fadeIn');
    }
    
    bindOpenAndCloseTriggers() {
        this.trigger.forEach(item => {
            item.addEventListener('click', () => {
                if(!item.querySelector('.play__circle').classList.contains('closed')) {
                    this.activeBtn = item;
                    this.openOverlayWithVideo(this.activeBtn.getAttribute('data-url'));
                }
            })
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
            if(url !== this.player.getVideoData()['video_id']) {
                this.player.loadVideoById({videoId: url})
            }
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