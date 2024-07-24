//Avoid the below types of comparisons.
console.log(null > 0)
console.log(null == 0)
console.log(null>=0)
console.log(null<=0)
console.log(undefined==0)
console.log(undefined >0)
console.log(undefined < 0)
console.log(undefined >= 0)
console.log(undefined <= 0)

//Use strict check === . this will check both by equating the data type and its value.
