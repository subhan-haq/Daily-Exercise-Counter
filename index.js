let countEl = document.getElementById("count-el")

let count = 0
function first(){
    if (Number(localStorage.getItem("count"))){
        count = Number(localStorage.getItem("count"))
        countEl.textContent = count
    }
}

function increment() {
    count += 1
    countEl.textContent = count
    localStorage.setItem("count", count.toString())
}

function reset() {
    countEl.textContent = 0
    count = 0
    localStorage.setItem("count", count.toString)
}
