// Heart animation
const heart = document.getElementById('heart')
const heartAnimation = bodymovin.loadAnimation({
    container: heart,
    path: 'https://assets1.lottiefiles.com/datafiles/nZgj7wTd56UtH6m/data.json',
    renderer: 'svg',
    loop: true,
    autoplay: false,
})

const heartFlying = document.getElementById('heart-flying-1')
const heartFlyingAnimation = bodymovin.loadAnimation({
    container: heartFlying,
    path: 'https://assets3.lottiefiles.com/packages/lf20_dvmiho7v.json',
    renderer: 'svg',
    loop: true,
    autoplay: false,
})

// Modal 1
const modal_1 = document.getElementById('modal-1')
const modalClose_1 = document.getElementById('modal-1-close')
const btnYes = document.getElementById('btn-yes')

modalClose_1.addEventListener('click', () => {
    modal_1.classList.remove('active')
})

btnYes.addEventListener('click', () => {
    modal_1.classList.add('active')
    heartAnimation.goToAndPlay(0, true)
})

// Modal 2
const modal_2 = document.getElementById('modal-2')
const btnOk = document.getElementById('card-ok')

btnOk.addEventListener('click', () => {
    modal_1.classList.remove('active')
    heartFlyingAnimation.goToAndPlay(0, true)
    setTimeout(() => {
        modal_2.classList.add('active')
    }, 200)
})

// Login
const login = document.getElementById('card-login')
const formLogin = document.getElementById('form-login')
login.addEventListener('click', () => {
    modal_2.classList.remove('active')
    setTimeout(() => {
        formLogin.classList.add('active')
    }, 200)
})