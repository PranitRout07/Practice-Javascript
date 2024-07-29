// if 

const isUserLoggerIn = true 
if (isUserLoggerIn){

}

//Implicit scope

const bal = 1000
if (bal>500) console.log("test");
//It will execute in one line , and the scope is one line

//switch
//if break is not mention after each case then it will rest of the code below it but except default

// const m = 3
// switch (m) {
//     case 1:
//         console.log("one")
//         break;
//     case 2:
//         console.log("two")
//         break;
//     default:
//         console.log("default")
// }


//falsy values
// false,0,-0,BigInt 0n , "", undefined , NaN

//truthy valuesmay surprise you
//"0", "false" , " ", [] , {} , function(){}


//check an object is empty or not

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}