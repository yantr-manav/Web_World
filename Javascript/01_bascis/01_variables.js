
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

console.table([accountEmail,accountId,accountPassword,accountCity]) // to print in table format




"use strict"; //treats all JS code as newer version 

// alert(3+3) 
//  we are using nodejs , not browser so don't expect output here

// Data types

// number => 2 to power 7
// bigint
//string => ""
// Boolean => true/false
// null => standalone value    Note : There's a difference between null and undefined
// undefined =>
// symbol =>

// object

let name = "Saivamshi "
let age = 22
let isLoggedIn = true

console.log(typeof "saivamshi")

console.log(typeof undefined) // undefined
console.log(typeof null) //object


