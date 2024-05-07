

const wrapper = document.querySelector(".wrapper"),
    form = wrapper.querySelector(".form"),
    input = wrapper.querySelector(".form input"),
    btn = wrapper.querySelector(".form button"),
    img = wrapper.querySelector(".qr-code img");
let currentValueInput

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const inputValue = input.value.trim()
    if(!inputValue || inputValue === currentValueInput) return;
    currentValueInput = inputValue;

    btn.textContent = "Йде створення QR-коду..."
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;

    img.addEventListener("load", () => {
        wrapper.classList.add("active")
        btn.textContent = "Згенерувати QR-код"
    })

    img.addEventListener("error", () => {
        alert("Помилка під час завантаження зображення QR-кода,спробуйте ще раз")
        location.reload()
    })
})  

input.addEventListener("input",function(){
    if(!this.value.trim() && wrapper.classList.contains("active")) {
        wrapper.classList.remove("active")
    }
})