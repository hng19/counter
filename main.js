const counter = document.getElementById("counter")
const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")

let count = 0

nextBtn.addEventListener("click", function () {
    count++
    counter.innerText = count
    changeColor()
})

prevBtn.addEventListener("click", function () {
    count--
    counter.innerText = count
    changeColor()
    
})

function changeColor() {
    if (count > 0) {
        counter.style.color = "green"
    } else if (count == 0) {
        counter.style.color = "#333333"
    } else if (count < 0) {
        counter.style.color = "red"
    }
}