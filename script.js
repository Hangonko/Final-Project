const burgerBar = document.getElementsByClassName('burger-bar')[0]
const navLinks = document.getElementsByClassName('navUL')[0]
const Logo = document.getElementsByClassName('Logo')[0]

burgerBar.addEventListener('click', ()=> {
    navLinks.classList.toggle('active')
    Logo.classList.toggle('active')
})