const body = document.body;
const darkmode = document.getElementById('switch-theme')
const darkmodeIcon = document.getElementById('switch-theme-icon')
const darkmodeText = document.getElementById('switch-theme-text')
const logo = document.getElementById('logo')
const changeColor = document.getElementById('change-color')

const rootStyles = document.documentElement.style;
darkmode.addEventListener('click', () => {
    body.classList.toggle('dark')
    darkmodeIcon.src = "assets/images/icon-moon.svg"
    darkmodeText.textContent = 'Dark Mode'
    logo.src = "assets/images/logo-dark.svg"
})

const cambiardarkmode = () => {
    if (body.classList.contains('dark')) {

    } else {
        darkmodeIcon.src = "assets/images/icon-sun.svg"
        darkmodeText.textContent = 'Light Mode'
        logo.src = "assets/images/logo-light.svg"
    }
}

darkmode.addEventListener('click', cambiardarkmode)

changeColor.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {

        rootStyles.setProperty('--primary-color', event.target.dataset.color)
    }
})

