let obj = {
    id: "777",
    password: "701",
};

let modmeId = document.querySelector(".login");
let modmePassword = document.querySelector(".parol");
const sendBtn = document.querySelector(".send-btn");
const form = document.querySelector("form")
let validation = document.querySelector(".validation")

let inputFirst = "";
let inputSecond = "";

sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(modmeId.value);
    console.log(modmePassword.value);
});

modmeId.addEventListener("input", (e) => {
    inputFirst = e.target.value;
    show();
});

modmePassword.addEventListener("input", (e) => {
    inputSecond = e.target.value;
    show();
});

const show = () => {
    if (inputFirst !== "" && inputSecond !== "") {
        sendBtn.classList.add("show");
    } else {
        sendBtn.classList.remove("show");
    }
};


sendBtn.addEventListener("click", e => {
    e.preventDefault()

    if (modmeId.value != "" && modmePassword.value != "") {
        validation.innerHTML = ""

        let newObj = {}
        newObj.id = modmeId.value
        newObj.password = modmePassword.value
        if (obj.id == newObj.id && obj.password == newObj.password) {
            window.location.href = "./HomePage.html"
            localStorage.setItem("token",JSON.stringify(newObj))
        } else {
            alert("Bunday user yoq")
        }

    } else {
        validation.textContent = "Bosh joylarni toldiring"
    }

    modmeId.value=""
    modmePassword.value=""
})