//reduce

const nums = [1, 2 , 3 ,4, 5]
// const Total = nums.reduce(function(accumulator,currentValue){
//     return accumulator + currentValue
// }

// ,0)


const Total = nums.reduce((accumulator,currentValue) => {
    return accumulator + currentValue
},0) //here 0 is passed as initial value

console.log(Total)

