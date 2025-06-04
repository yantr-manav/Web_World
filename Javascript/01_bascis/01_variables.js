
// Const is a variable that defines a constant variable that cant be changed afterwards
// Meanwhile let variable can gives you access to change the value of variable afterwards
// Don't use var much : reason : Issue of block and functional scope

const accountId =  143
let accountEmail = "saivamshi@gmail.com"
var accountPassword = "12345"
accountCity = " Mumbai"



accountEmail = " abc@hc.com"
accountCity = "Aligarh"
accountPassword = "143143"
console.log(accountCity)


console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity])