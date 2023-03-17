const form = document.getElementById('link-form');
const input = document.getElementById('link-input');
const message = document.getElementById('err-msg');

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}

form.addEventListener('submit', formSubmit)

function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
  }
  

function formSubmit(e) {
    e.preventDefault()

    if(input.value === '') {
        message.innerHTML = 'Please enter something'
        input.classList.add('border-red')
    } else if (!validURL(input.value)) {
        message.innerHTML = 'Please enter a valid URL'
        input.classList.add('border-red')
    } else {
        message.innerHTML = ''
        input.classList.remove('border-red')
        alert('Success')
        input.value = ''
    }
}