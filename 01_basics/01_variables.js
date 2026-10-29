const accountId = 144553;
let accountEmail = "shanalam123@gmail.com";
var accountPassword = "12345";
accountCity = "Aligarh";
let accountState;

// accountId = 2 not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "ershan01@gmail.com"
accountPassword = "456325"
accountCity = "Jaipur"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])