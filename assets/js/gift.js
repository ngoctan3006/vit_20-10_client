// Loading animation
const loading = document.querySelector('.loading__animate')
const loadAnim = bodymovin.loadAnimation({
    container: loading,
    path: './assets/json/waiting.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
})

// Gift animation
const gift = document.getElementById('gift')
const wrap_1 = document.getElementById('wrap-1')
const wrap_2 = document.getElementById('wrap-2')
const giftAnimation = bodymovin.loadAnimation({
    container: gift,
    path: './assets/json/gift.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
})

gift.addEventListener('click', () => {
    giftAnimation.goToAndPlay(0, true)
})

giftAnimation.addEventListener('complete', () => {
    gift.classList.add('hide')
    wrap_1.classList.add('hide')
    wrap_2.classList.remove('hide')
})

const confetti = document.getElementById('confetti')
const confettiAnimation = bodymovin.loadAnimation({
    container: confetti,
    path: './assets/json/confetti.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
})

window.onload = () => {
    document.querySelector('.loading__modal').classList.remove('active')
    setTimeout(() => {
        confettiAnimation.goToAndPlay(0, true)
    }, 500)
}

confettiAnimation.addEventListener('complete', () => {
    confetti.classList.add('hide')
})

// Card
// Genarator card
const fullNameEl = document.getElementById('full-name')
const fullName = JSON.parse(window.localStorage.getItem('fullName'))
const image_h = JSON.parse(window.localStorage.getItem('image_h'))
const image_v = JSON.parse(window.localStorage.getItem('image_v'))
const wishes = JSON.parse(window.localStorage.getItem('wish'))
const image_h_size = image_h.length
const image_v_size = image_v.length

fullNameEl.innerText = fullName

const cardWrap = document.getElementById('wrapper')
const modalWrap = document.getElementById('modal-wrap')

wishes.forEach(wish => {
    const divEl = document.createElement('div')
    divEl.classList.add('card')
    cardWrap.appendChild(divEl)

    const modal = document.createElement('div')
    modal.classList.add('modal')
    const random_h = Math.floor(Math.random() * image_h_size)
    const random_v = Math.floor(Math.random() * image_v_size)
    modal.innerHTML = `
        <div class="modal__body">
            <div class="modal__close">
                <i class='bx bx-x modal__close-icon'></i>
            </div>
            <div class="modal__card">
                <div class="img__horizontal">
                    <img src="${image_h[random_h] && image_h[random_h].search('&id=1') !== -1 ? image_h[random_h] : './assets/img/ngang.png'}" alt="" class="card__img">
                </div>
                <div class="img__vertical">
                    <img src="${image_v[random_v] && image_v[random_v].search('&id=1') !== -1 ? image_v[random_v] : './assets/img/doc.png'}" alt="" class="card__img">
                </div>
            </div>
            <p class="modal__text">${wish}</p>
        </div>
    `
    modalWrap.appendChild(modal)
})

const cards = document.querySelectorAll('.card')
const modals = document.querySelectorAll('.modal')
const closeBtns = document.querySelectorAll('.modal__close')
const modalTexts = document.querySelectorAll('.modal__text')

// Fit Text
modalTexts.forEach(modalText => {
    const len = modalText.textContent.length
    if (len <= 70) {
        jQuery(modalText).fitText(0.8)
    } else if (len <= 100) {
        jQuery(modalText).fitText(1.0)
    } else if (len <= 200) {
        jQuery(modalText).fitText(1.3)
    } else if (len <= 300) {
        jQuery(modalText).fitText(1.5)
    } else if (len <= 400) {
        jQuery(modalText).fitText(1.7)
    } else if (len <= 500) {
        jQuery(modalText).fitText(1.9)
    } else if (len <= 700) {
        jQuery(modalText).fitText(2.2)
    } else {
        jQuery(modalText).fitText(2.5)
    }
})

// Card animation
const cardAnimations = []
const layer = document.querySelector('.layer')
cards.forEach(card => {
    const animation = bodymovin.loadAnimation({
        container: card,
        path: './assets/json/mail.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
    })
    cardAnimations.push(animation)
})

// Open card
cardAnimations.forEach((cardAni, index) => {
    cards[index].addEventListener('click', () => {
        cardAni.goToAndPlay(15, true)
        cards[index].classList.add('disable', 'floating')
        layer.classList.add('active')
        setTimeout(() => {
            cardAni.pause()
            modals[index].classList.add('active')
        }, 2100)
    })
})

// Close card
closeBtns.forEach((closeBtn, index) => {
    closeBtn.addEventListener('click', () => {
        modals[index].classList.remove('active')
        setTimeout(() => {
            cardAnimations[index].goToAndPlay(160, true)
            cardAnimations[index].addEventListener('complete', () => {
                layer.classList.remove('active')
                cards[index].classList.remove('disable', 'floating')
            })
        }, 300)
    })
})
