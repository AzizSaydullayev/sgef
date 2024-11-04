let obj = {
    id: "777",
    password: "701",
}

let login = document.querySelector('.login')
let parol = document.querySelector('.parol')
const sendBtn = document.querySelector('.send-btn')
const validation = document.querySelector('.validation')
let inputFirst = ''
let inputSecond = ''

login.addEventListener('input', e => {
    inputFirst = e.target.value
    show()
})

parol.addEventListener('input', e => {
    inputSecond = e.target.value
    show()
})

const show = () => {
    if (inputFirst !== "" && inputSecond !== "") {
        sendBtn.classList.add('show')
    } else {
        sendBtn.classList.remove('show')
    }
}

sendBtn.addEventListener('click', e => {
    e.preventDefault()
    if (login.value !== '' && parol.value !== '') {
        let newObj = {
            id: login.value,
            password: parol.value
        }
        if (obj.id === newObj.id && obj.password === newObj.password) {
            window.location.href = './HomePage.html'
            localStorage.setItem('token', JSON.stringify(newObj))
        } else {
            alert("Bunday user yo'q")
        }
    } else {
        validation.textContent = "Bo'sh joylarni to'ldiring!"
    }

    login.value = ""
    parol.value = ""
})
