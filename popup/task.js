const popup = document.getElementById('subscribe-modal')

if (!getCookie('modal')) {
    popup.classList.add('modal_active')
}

const closeButton = document.querySelector('.modal__close')

closeButton.onclick = () => {
    setCookie('modal', false)
    popup.classList.remove('modal_active')
}

function setCookie (name, value) {
    const expires = new Date()
    expires.setDate(expires.getDate() + 10)
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}`
}

function getCookie (name) {
    const pairs = document.cookie.split('; ')
    return  pairs.find(p => p.startsWith(name + "="))
}