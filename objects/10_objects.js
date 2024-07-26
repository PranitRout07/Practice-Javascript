//objects concept is very important in javascript

//singleton


let mySym = Symbol("key1")

//object literals
const User = {
    [mySym]: "symkey1", //if the symbol is not inside a sqaure bracket then when you are printing the User 
    name: "Pranit",
    age: 23,
    location: "BBSR",
    email: "pranit@gmail.com",
    lastlogin: ["Monday","Wednessday"]
}

console.log(typeof User[mySym])
//here in the above object you have to keep one thing in mind that if the key is inside double then you can not access using <var>.<field_name>
//Here you should use <var>["<field-name>"]

// User.email = "pranit@chatgpt.com"
// console.log(User)
// Object.freeze(User)
//after freezing the object the fields inside the object will not changed and also you will not get any error if you want to change also . 
// User.email = "pranit.rout.321@gmail.com"
// console.log(User)


//object singleton
//const appUser = new Object() //singleton object
const user = {} //non singleton object
user.id = "123"
user.name = "pranit"
user.isLoggedIn = true 

// console.log(user)


//merge objects 
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = Object.assign({},obj1,obj2)
//spread operator
const obj3 = {...obj1,...obj2}
// console.log(obj3)


//all the keys and values 
// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))

//print the entries, this will print the object in the array format
// console.log(Object.entries(obj3))

//check the properties present or not
// console.log(obj3.hasOwnProperty('1'))

//destructure

const userDetails = {
    name: "pranit",
    age: 23,
}

const {name: n} = userDetails
//after destructuring you can access using n 
console.log(n)