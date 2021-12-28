// mobile navigation toggle
let hamburger = document.querySelector('.hamburger-menu')
hamburger.addEventListener('click', () => {
    document.querySelector('.nav-mobile-overlay').style.display = "flex"
})

let closeMobileNav = document.querySelector('.close-overlay')
closeMobileNav.addEventListener('click', () => {
    document.querySelector('.nav-mobile-overlay').style.display = "none"
})