const nums = [1,2,3,4,5]
const newNums = nums.filter( (num)=> num >2 )
// console.log(newNums)

const books = [
    {title: 'b1',genre: 'science'},
    {title: 'b2',genre: 'fiction'},
    {title: 'b3',genre: 'arts'},
    {title: 'b4',genre: 'science'},
    {title: 'b5',genre: 'science'},
    {title: 'b6',genre: 'fiction'},
    {title: 'b7', genre: 'history'}
]

const titles = books.filter( (bk)=>{
    if (bk.genre==='science'){
        return bk
    }
} )

// console.log(titles)



//map
//filter is used for consition checking but map is used for modifying

const nums1 = [1,2,3,4,5,6,7]

// const newNums1 = nums1.map((num) => { return num+10})
// console.log(newNums1)

//chaining

const newNums1 = nums1
                .map((num)=>{return num * 10})
                .map(num =>{ return num+1 })
                .filter(num => {return num>30})
// console.log(newNums1)