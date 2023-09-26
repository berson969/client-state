const textarea = document.getElementById('editor')


window.addEventListener('load', loadStorage)
window.addEventListener('beforeunload', saveStorage)

function saveStorage () {
    if (textarea.value) {
        localStorage.setItem('text', textarea.value)
    }
}

function loadStorage() {
    textarea.value = localStorage.getItem('text')
}

// textarea.addEventListener('input', () => {
//     saveStorage()
// })

const clear = document.querySelector('.clear')

clear.addEventListener('click', (event) => {
    event.preventDefault()
    localStorage.removeItem('text')
    textarea.value = ''
})