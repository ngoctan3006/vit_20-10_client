// Hello animation
const hello = document.querySelector('.hello__animation')
const helloAnim = bodymovin.loadAnimation({
    container: hello,
    path: './assets/json/hello.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
})
helloAnim.setSpeed(2)
setTimeout(() => {
    document.querySelector('.hello__modal').classList.remove('active')
}, 4000)

// Heart animation
const heart = document.getElementById('heart')
const heartAnimation = bodymovin.loadAnimation({
    container: heart,
    path: './assets/json/heart.json',
    renderer: 'svg',
    loop: true,
    autoplay: false,
})

const heartFlyings = document.querySelectorAll('.heart-flying')
const heartFlyingAnimations = []
heartFlyings.forEach(el => {
    const animation = bodymovin.loadAnimation({
        container: el,
        path: './assets/json/heartfly.json',
        renderer: 'svg',
        loop: true,
        autoplay: false,
    })
    heartFlyingAnimations.push(animation)
})

// Yes/No
const btnYes = document.getElementById('btn-yes')
const btnNo = document.getElementById('btn-no')
const title = document.getElementById('title')
const bodyWidth = document.body.clientWidth
const bodyHeight = document.body.clientHeight
const btnWidth = btnNo.offsetWidth
const btnHeight = btnNo.offsetHeight
const titleHeight = title.offsetHeight + title.offsetTop

if(bodyWidth < 768) {
    btnNo.addEventListener('click', () => {
        handlerNoBtnClick()
    })
} else {
    btnNo.addEventListener('mouseover', () => {
        handlerNoBtnClick()
    })
}

function handlerNoBtnClick() {
    const oldLeft = btnNo.offsetLeft
    const oldTop = btnNo.offsetTop
    let newLeft = Math.abs(Math.floor(Math.random() * bodyWidth - btnWidth))
    let newTop = Math.abs(Math.floor(Math.random() * bodyHeight - btnHeight))
    
    while (newLeft < btnWidth || newLeft + btnWidth >= bodyWidth || newLeft >= oldLeft - btnWidth && newLeft <= oldLeft + btnWidth) {
        newLeft = Math.abs(Math.floor(Math.random() * bodyWidth - btnWidth))
    }
    while (newTop < titleHeight || newTop + btnHeight >= bodyHeight || newTop >= oldTop - btnHeight && newTop <= oldTop + btnHeight) {
        newTop = Math.abs(Math.floor(Math.random() * bodyHeight - btnHeight))
    }
    
    btnNo.style.left = newLeft + 'px'
    btnNo.style.top = newTop + 'px'
    
    btnYes.style.left = oldLeft + 'px'
    btnYes.style.top = oldTop + 'px'
}

// Modal 1
const modal_1 = document.getElementById('modal-1')
const modalClose_1 = document.getElementById('modal-1-close')

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
const reason = 'Vì anh em quá đẹp trai, soái ca với ga lăng nữa, hihi  :>>>>'
const btnOk = document.getElementById('card-ok')
const total = document.getElementById('total')
const curr = document.getElementById('curr')
let count = 0
total.innerText = reason.length
curr.innerText = reason.length
const inputReason = document.getElementById('card-input')

window.onload = () => {
    document.body.style.backgroundImage = 'url("./assets/img/bg1.jpg")'
    document.querySelector('.main').classList.remove('blur')
    document.querySelectorAll('.main .btn').forEach(el => {
        el.classList.remove('blur')
    })
    inputReason.value = ''
}

inputReason.oninput = () => {
    if (count < reason.length) {
        inputReason.value = reason.substring(0, ++count)
        curr.innerText = reason.length - count
    } else {
        inputReason.value = reason
    }
    if (count === reason.length) {
        btnOk.classList.remove('btn--disable')
    }
}

// Modal 2
const modal_2 = document.getElementById('modal-2')

btnOk.addEventListener('click', () => {
    modal_1.classList.remove('active')
    heartFlyingAnimations.forEach(el => {
        el.goToAndPlay(0, true)
    })
    setTimeout(() => {
        modal_2.classList.add('active')
    }, 200)
})

// Login
const login = document.getElementById('card-login')
const modalFormLogin = document.getElementById('modal-form-login')
const formNotify = document.getElementById('form-notify')
const username = document.querySelector('input[name="username"]')
const password = document.querySelector('input[name="password"]')
login.addEventListener('click', () => {
    modal_2.classList.remove('active')
    setTimeout(() => {
        modalFormLogin.classList.add('active')
    }, 200)
})

formNotify.innerText = ''
username.addEventListener('input', () => {
    formNotify.innerText = ''
})

password.addEventListener('input', () => {
    formNotify.innerText = ''
})

const spinner = document.querySelector('.spinner__animation')
const spinnerModal = document.getElementById('spiner')
const spinnerAnim = bodymovin.loadAnimation({
    container: spinner,
    path: './assets/json/dot_spinner.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
})

const loginNotify = document.querySelector('.notify__animation')
const loginNotifyAnim = bodymovin.loadAnimation({
    container: loginNotify,
    path: './assets/json/error.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
})
loginNotifyAnim.setSpeed(2)

const notifyLoginModal = document.querySelector('.login__notify')
const btnCfYes = document.getElementById('notify-yes')
const btnCfNo = document.getElementById('notify-no')
const defaultWish = [
    'Girl VIT là phải lit, hãy luôn cháy hết mình cậU nhé ^^',
    'Chúc cậu có được tất cả niềm hạnh phúc trên thế gian này :>>',
    'Hãy để mặt trời thắp sáng con đường thành công của bạn và hãy để gió đưa bạn đến đó! Chúc may mắn cho ngày hôm nay & cho nhiều ngày mai! 😊'
]

$('#form-login').on('submit', function (e) {
    spinnerModal.classList.add('active')
    $.ajax({
        type: 'POST',
        url: 'https://from-boys-vit-with-love.netlify.app/.netlify/functions/api',
        data: $(this).serialize(),
        success: data => {
            spinnerModal.classList.remove('active')
            switch(data.message) {
                case 'Wrong password':
                    formNotify.innerText = 'Tên đăng nhập hoặc mật khẩu không chính xác'
                    break;
                case 'Default':
                    notifyLoginModal.classList.add('active')
                    formNotify.innerText = ''
                    btnCfNo.addEventListener('click', () => {
                        notifyLoginModal.classList.remove('active')
                    })
                    btnCfYes.addEventListener('click', () => {
                        notifyLoginModal.classList.remove('active')
                        window.localStorage.setItem('fullName', JSON.stringify('bạn'))
                        window.localStorage.setItem('image_h', JSON.stringify(''))
                        window.localStorage.setItem('image_v', JSON.stringify(''))
                        window.localStorage.setItem('wish', JSON.stringify(defaultWish))
                        window.location = '../../gift.html'
                    })
                    break;
                case 'Success':
                    window.localStorage.setItem('fullName', JSON.stringify(data.fullName))
                    window.localStorage.setItem('image_h', JSON.stringify(data.image_h))
                    window.localStorage.setItem('image_v', JSON.stringify(data.image_v))
                    window.localStorage.setItem('wish', JSON.stringify(data.wish))
                    window.location = '../../gift.html'
                    break;
                default:
                    console.log('undefined')
            }
        }
    })
    e.preventDefault()
})