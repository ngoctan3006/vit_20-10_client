// Gift animation
const gift = document.getElementById('gift')
const wrap_1 = document.getElementById('wrap-1')
const wrap_2 = document.getElementById('wrap-2')
const giftAnimation = bodymovin.loadAnimation({
    container: gift,
    path: 'https://assets2.lottiefiles.com/packages/lf20_Dn85as.json',
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
    path: 'https://assets3.lottiefiles.com/packages/lf20_rovf9gzu.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
})

window.onload = () => {
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
const wish = JSON.parse(window.localStorage.getItem('wish'))
const image_h_size = image_h.length
const image_v_size = image_v.length

fullNameEl.innerText = fullName ? fullName : 'undefined'

const cardWrap = document.getElementById('wrapper')
const modalBody = document.getElementById('modal-body')

wish.forEach(() => {
    const divEl = document.createElement('div')
    divEl.classList.add('card')
    cardWrap.appendChild(divEl)
})

const cardElements = document.querySelectorAll('.card')
cardElements.forEach((card, index) => {
    console.log(card)
    card.addEventListener('click', () => {
        const random_h = Math.floor(Math.random() * image_h_size)
        const random_v = Math.floor(Math.random() * image_v_size)
        document.querySelector('.img__horizontal').innerHTML = `
            <img src="${image_h[random_h].search('https://drive.google.com/uc?export=view&id=') !== -1 ? image_h[random_h] : './assets/img/ngang.png'}" alt="" class="card__img">
        `
        document.querySelector('.img__vertical').innerHTML = `
            <img src="${image_v[random_v].search('https://drive.google.com/uc?export=view&id=') !== -1 ? image_v[random_v] : './assets/img/doc.png'}" alt="" class="card__img">
        `
        document.querySelector('.modal__text span').innerText = wish[index]

        // Fit text to frame
        textFit(document.querySelector(".modal__text"))
    })
})

// Card animation
const cards = document.querySelectorAll('.card')
const cardAnimations = []
cards.forEach(card => {
    const animation = bodymovin.loadAnimation({
        container: card,
        path: 'https://assets1.lottiefiles.com/packages/lf20_6bnmd1ys.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
    })
    cardAnimations.push(animation)
})

const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal__close')
let curr = 0
cardAnimations.forEach((card, index) => {
    cards[index].addEventListener('click', () => {
        curr = index
        card.goToAndPlay(15, true)
        cards.forEach(card => {
            card.classList.add('disable')
        })
        setTimeout(() => {
            card.pause()
            modal.classList.add('active')
        }, 2100)
    })
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active')
    setTimeout(() => {
        cardAnimations[curr].goToAndPlay(160, true)
        cardAnimations[curr].addEventListener('complete', () => {
            cards.forEach(card => {
                card.classList.remove('disable')
            })
        })
    }, 300)
})