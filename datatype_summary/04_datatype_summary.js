//primitive datatype

//7 types
//1. String
//2. Number
//3. Boolean
//4. null
//5. undefined
//6. Symbol
//7. BigInt

//Non Primitive Datatype
//array,objects,functions

//Master javascript by mastering objects and browser elements 

//Javascript is dynamically types language


//symbols datatype
//-----------------

const id = Symbol('123')
const anotherId = Symbol('123')

//here in the above even if we have passed same value to Symbol and assigned them to different variables , still they are different .
// use this below statement to check whether the two variabkes are same or not
console.log(id == anotherId)

//Big Int
//---------

const bigNumber = 13141241155235237582327952n //after adding n in the last it will automatically declared as a big int

//array

const myarray = ['item1','item2','item3']
let myObj = {
    name: "pranit",
    age: 23,
}

// Stack and Heap Memory in Javascript

//All the primitive datatypes use stack and all the non-primitive use heap
//When you use stack , you will get a copy of the original value
//But when you will use heap you will get the refernece of original value.(just like pointers in golang)


//primitive below
let val1 = "Hello"
let val2 = val1
val2 = "hii"
console.log(val1)
console.log(val2)

//Non primitive below
let obj1 = {
    email: "pranit@gmail.com",
    age: 23
}

let obj2 = obj1

obj2.email = "pranit123@gmail.com"
console.log(obj1)
console.log(obj2)