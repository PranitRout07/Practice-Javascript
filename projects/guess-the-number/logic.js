const form = document.querySelector("form")
const result = document.querySelector("#result")
const guessed_nums = []
let num_of_trials = 5
const pre = document.querySelector("#pre")
const triesleft = document.querySelector("#triesleft")

const random_num = parseInt(Math.random()*100+ 1)
console.log(random_num)

form.addEventListener('submit',function(e){
    e.preventDefault()
    const guessed_num = parseInt(document.querySelector("#guess").value)
    if (guessed_num === random_num && num_of_trials!=0){
        result.innerHTML = `<h1>You have won!</h1>`
        return
    }else if(num_of_trials==0){
        result.innerHTML = `<h1>All trials are over. You have lost!</h1>`
        return
    }else if(guessed_num<1 && guessed_num>100){
        num_of_trials = num_of_trials - 1
        triesleft.innerHTML = `<p><b>You have to choose between 1 and 100</p></b>`
    }
    else if(isNaN(guessed_num)){
        num_of_trials = num_of_trials - 1
        triesleft.innerHTML = `<p><b>You have to choose between 1 and 100</p></b>`
    }
    else{
        guessed_nums.push(guessed_num)
        num_of_trials = num_of_trials - 1
        pre.innerHTML = `<p><b>Previous guesses: [${guessed_nums}] </b></p>`
        triesleft.innerHTML = `<p><b>Num of trials remaining : ${num_of_trials}</b></p>`
    }
    
    
 
})  