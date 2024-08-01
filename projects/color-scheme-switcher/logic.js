
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
const canvas = document.querySelector(".canvas")
// console.log(buttons)
buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        console.log(e.target.id)
        // body.style.backgroundColor = e.target.id
        canvas.style.backgroundColor = e.target.id
    })
})