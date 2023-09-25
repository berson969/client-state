const textarea = document.getElementById('editor')


window.addEventListener('load', loadStorage)
setInterval(() => {
    console.log('text', textarea)
    if (textarea.value.trim()) {
        saveStorage(textarea.value.trim())
    }
}, 5000)

function saveStorage (text) {
    localStorage.setItem('text', text)
}

function loadStorage() {
    textarea.value = localStorage.getItem('text')
}

const clear = document.querySelector('.clear')

clear.addEventListener('click', (event) => {
    event.preventDefault()
    localStorage.clear()
    textarea.value = ''
})