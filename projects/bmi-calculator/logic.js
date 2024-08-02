const form = document.querySelector('form')
console.log(form)
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseFloat(document.querySelector("#height").value)
    const weight =  parseFloat(document.querySelector('#weight').value)
    const results = document.querySelector("#results")
    const category = document.querySelector("#category")
    if (height === '' || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid height";
        console.log(results)
        return
    }
    if (weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight";
        console.log(results)
        return
    }

    res = (weight*10**4)/(height*height).toFixed(2)
    results.innerHTML = `BMI is : ${(weight*10**4)/(height*height).toFixed(2)}`

    if (res<18.6){
        category.innerHTML = `You are under weight`
    }else if(res>18.6 && res<24.9){
        category.innerHTML = `You are in normal range`
    }else{
        category.innerHTML = `You are over weight`
    }
})

