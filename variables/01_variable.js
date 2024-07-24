const accountId = 12134
let accountEmail = "demo@gmail.com"
var accountPassword = "12345"
accountCity = "Bhubaneswar"
let accountState
// accountId = 2 (cannot modify a constant) 
// var keyword is not used , as here scope is not maintained, instead of var let is used . 
/* NEVER USE VAR*/
/* IF A VARIABLE IS ONLY DECLARE AND NOT ASSIGNED TO ANY VALUES , THEN BY DEFAULT IT IS ASSIGNED TO UNDEFINED */
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])