const user = {
    username: "pranit",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) //here this keyword refers to current context
        console.log(this) //this will print all the current user details
    }
}

// user.welcomeMessage()
//Important 
// console.log(this) //if you try to print here the current context will be empty object but this same line if you try to execute in the browser then it will show window object.


//Here look below 
const demo = function(){
    console.log(this) //here you will get many datas
}
// demo()


//But now come to arrow function , here if you print this keyword you will get an empty object

const demo1 = () => {
    console.log(this)
}
// demo1()

//arrow function with implicit return

const sum = (n1,n2) => n1+n2 ;
// const sum = (n1,n2) => ( n1+n2 )
// console.log(sum(4,8))


//Immediatly Invoked Function Expression (IIFE)
//Follow its syntax, its kind of odd syntax wrapped around with parenthesis
//Also always close the context by using semicolon
// (function logic(){
//     console.log("Hello")
//     console.log("DB Connected...")
// })();


// (function logic(){ console.log("hello") })()
//unamed iifeis just the arrow function