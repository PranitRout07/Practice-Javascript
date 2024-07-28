// function sayMyName(username="pranit"){ //by default i am passing pranit as argument,if you call the function by giving another argument that argument will overwrite this default argument.
//     // suppose here default is not taken then in this situation we have to go for checking the username is empty or not
//     if (!username){
//         console.log("Please enter a username")
//         return 
//     }
//     return username
// } 

// name = sayMyName("joe")
// console.log(name)

//Suppose we don't know the number of parameters. You can think of ecommerce cart, where it will calculate the values of the products in the cart . Now you have implement this in that way

function calculateCartPrice(...num1){
    return typeof num1
}

// console.log(calculateCartPrice(1,2,3,4,5))

const user = {
    name:"pranit",
    age: 23
}

function handleObject(anyObject){
    console.log(`Username:- ${anyObject.name} , Age:- ${anyObject.age}`)
}

// handleObject(user)


//scope var keyword doesnot follow any scope

if (true){
    let a = 1
    const b = 2
    var c = 3
}

// console.log(a) //you will get error
// console.log(b)  //you will get error
// console.log(c) //you will not get error . it will actually print 3.


//two different ways of writing functions and their problems

//1. Normal way . We can call this function without any error before the function initialized.

// addOne(5)
function addOne(val){
    console.log(val,"Value")
}

//2. This way does not allow to call the function before function initialization
// addTwo(6) //it will throw error
const addTwo = function(val){
    console.log(val,"addtwo")
}
