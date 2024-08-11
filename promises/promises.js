// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB Calls
//     setTimeout(function(){
//         console.log('Task completed')
//         //if you don't mention resolve then the promise consume part will never execute
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// const promiseTwo = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Pranit",email:"pranit@gmail.com"})
//     },1000)
// }).then(function(userdata){
//     console.log(userdata.username,userdata.email)
// })



const promiseThree = new Promise(function(resolve,reject){
    // setTimeout(function(){
        let error = false 
        if(!error){
            resolve({username:"Pranit",email:"pranit@gmail.com"})
        }else{
            reject('ERROR Occured')
        }
    // },1000)

}).then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("Finally resolved or rejected")
})

//another way of writing promises 

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true 
        if(!error){
            resolve({username:"Pranit",email:"pranit@gmail.com"})
        }else{
            reject('ERROR Occured')
        }
    },1000)

})

//async will work .then but here we can not resolve the errors
//if we want to handle such errors we have to user try catch
async function consumePromiseFour() {
    try{
        const resp = await promiseFour
        console.log(resp)
    } catch(error){
        console.log(error)
    }

}

consumePromiseFour()


// async function getAllUsers() {
//     try{
//         const resp = await fetch('http://localhost:9090/metrics/')
        
//         // data = await resp.json()
//         console.log(resp)
//     }catch(error){
//         console.log("Error:",error)
//     }
// }

// getAllUsers()


// fetch('http://localhost:3000/metrics')
// .then((resp)=>{
//     return resp.text()
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })