// Heart animation
const heart = document.getElementById('heart')
const heartAnimation = bodymovin.loadAnimation({
    container: heart,
    path: 'https://assets1.lottiefiles.com/datafiles/nZgj7wTd56UtH6m/data.json',
    renderer: 'svg',
    loop: true,
    autoplay: false,
})

const heartFlying_1 = document.getElementById('heart-flying-1')
const heartFlying_2 = document.getElementById('heart-flying-2')
const heartFlying_3 = document.getElementById('heart-flying-3')
const heartFlyingAnimation_1 = bodymovin.loadAnimation({
    container: heartFlying_1,
    path: 'https://assets3.lottiefiles.com/packages/lf20_dvmiho7v.json',
    renderer: 'svg',
    loop: true,
    autoplay: false,
})
const heartFlyingAnimation_2 = bodymovin.loadAnimation({
    container: heartFlying_2,
    path: 'https://assets3.lottiefiles.com/packages/lf20_dvmiho7v.json',
    renderer: 'svg',
    loop: true,
    autoplay: false,
})
const heartFlyingAnimation_3 = bodymovin.loadAnimation({
    container: heartFlying_3,
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

const form_1 = document.getElementById('form-1')
form_1.onsubmit = e => {
    e.preventDefault()
}

// Set reason
const reason = 'Vì anh em quá đẹp trai, soái ca với ga lăng nữa, hihi'
const btnOk = document.getElementById('card-ok')
let count = 0;
const inputReason = document.getElementById('card-input')
inputReason.oninput = () => {
    if(count < reason.length) {
        inputReason.value = reason.substring(0, count++)
    } else {
        inputReason.value = reason
        btnOk.classList.remove('btn--disable')
    }
}

// Modal 2
const modal_2 = document.getElementById('modal-2')

btnOk.addEventListener('click', () => {
    modal_1.classList.remove('active')
    heartFlyingAnimation_1.goToAndPlay(0, true)
    heartFlyingAnimation_2.goToAndPlay(0, true)
    heartFlyingAnimation_3.goToAndPlay(0, true)
    setTimeout(() => {
        modal_2.classList.add('active')
    }, 200)
})

// Login
const login = document.getElementById('card-login')
const modalFormLogin = document.getElementById('modal-form-login')
const formLogin = document.getElementById('form-login')
formLogin.onsubmit = e => {
    e.preventDefault();
}
login.addEventListener('click', () => {
    modal_2.classList.remove('active')
    setTimeout(() => {
        modalFormLogin.classList.add('active')
    }, 200)
})