
const button = document.querySelector('.navbar__ham')
const navbarLinks = document.querySelector('.navbar__links')
const overlay = document.querySelector('#overlay')


button.addEventListener('click', () => {
    button.classList.toggle('open')
    navbarLinks.classList.toggle('navbar__open')
    overlay.classList.toggle('show')
})

overlay.addEventListener('click', () => {
    overlay.classList.toggle('show')
    button.classList.toggle('open')
    navbarLinks.classList.toggle('navbar__open')
})
