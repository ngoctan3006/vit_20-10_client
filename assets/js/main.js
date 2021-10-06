const modal = document.getElementById('modal_1')
const modalClose = document.getElementById('modal__close')
const btnYes = document.getElementById('btn-yes')

modalClose.addEventListener('click', () => {
    modal.classList.remove('active')
})

btnYes.addEventListener('click', () => {
    modal.classList.add('active')
})