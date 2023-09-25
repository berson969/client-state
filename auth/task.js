const element = document.getElementById('signin__form')
const welcome = document.getElementById('welcome')
function openWelcome(user_id) {
    element.parentElement.classList.remove('signin_active')
    const userID = document.getElementById('user_id')
    userID.textContent = user_id
    welcome.classList.add('welcome_active')
}

window.addEventListener('load', () => {

    const inputs = document.querySelectorAll('.control')
    inputs.forEach(input => {
        input.value = ''
    })
    const user_id = localStorage.getItem('user_id')
    if (user_id) {
        openWelcome(user_id)
    }
})

const signinButton = document.getElementById('signin__btn')
signinButton.addEventListener("click", (event) => {
    event.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            const inputs = document.querySelectorAll('.control')
            inputs.forEach(input => {
                input.value = ''
            })
            if (xhr.response && xhr.response.success) {
                openWelcome(xhr.response.user_id)
                localStorage.setItem('user_id', xhr.response.user_id)
            } else {
                alert('Неверный логин/пароль')

            }
        }
    })

    const formData = new FormData(element)

    xhr.open("POST", element.getAttribute('action'), true)
    xhr.send(formData)
})

const logout = document.getElementById('logout__btn')

logout.addEventListener('click', () => {
    element.parentElement.classList.add('signin_active')
    welcome.classList.remove('welcome_active')
    localStorage.removeItem('user_id')

})
