clock = document.querySelector('#clock')
console.log(clock)

setInterval(function(){
    const t = new Date()
    console.log(t.toLocaleTimeString())
    clock.innerHTML = `${t.toLocaleTimeString()}`
},1000)