//Below syntax will automatically detect the val1 as number type
let val1 = 10

//Specifically typecasting number 
const val2 = new Number(100)

console.log(val2.toString())
console.log(val2.toFixed(2))

// console.log(val1.toString())

const bal = 100000 
console.log(bal.toLocaleString('en-IN'))

// +++++++++++++++++++++++++++++++++

console.log(Math.min(1,23424,242,13))
// console.log(Math.random())

console.log((Math.random()*10).toPrecision(1) + 1)