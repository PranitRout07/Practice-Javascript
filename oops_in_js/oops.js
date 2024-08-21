//look beblow to understand this keyword

const obj = {
    name:"Pranit",
    accountStatus:"active",
    getUserDetails : function(){
        console.log(`Username: ${this.name}`)
        console.log(`Account Status: ${this.accountStatus}`)
    
    }
}
obj.getUserDetails()
// console.log(obj.getUserDetails())


//when you console log (this) in the editor it will give an empty object on the global level
//But when you console log (this) in the browser you will see various window elements {Important interview perspective}


//IMPORTANT
// function User(name,status){
//     this.name = name 
//     this.status = status
//     return this
// }

// const user1 = User('pranit',true)
// console.log(user1)
//create another user and print the first user you will see the first user data is modified
// const user2 = User('Rohit',false)
// console.log(user1)

//This is a problem,to solve this use new keyword

//const user1 = new User('pranit',true)
//const user2 = new User('Rohit',false)
//console.log(user1) //this will not change like before.acts like a constructor
