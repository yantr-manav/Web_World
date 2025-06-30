// if 
const isUserLoggedIn = true
const temperature = 41

if (isUserLoggedIn){
    // console.log("yes you are logged in")
}

if (temperature < 50){
    // console.log("Less than 50")
}else{
console.log("Temperature is greater than 50")
}

// datatypes: 
//  < , > , <= , >= , == , ===, !=,!==

const score = 22;
if (score>20){
    // const power = "fly";
    // console.log(`User power: ${power}`)
}

const balance = 1000;
// if (balance > 500) console.log("test"); // single line code 
// if (balance > 500) console.log("test"),console.log("test2"); //  you can write multiple lines as well but not a good practice

if (balance< 500){
    // console.log("Less than 500")
} else if(balance<750){
    // console.log("less than 750")
} else if (balance<1000){
    // console.log("less than 1000 ")
} else { 
    // console.log("greater than 1000 or equals to 1000")
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true 
const loggedInFromEmail = false

if (userLoggedIn && debitCard){
    // console.log("Allow to buy course")
}

if (loggedInFromEmail || loggedInFromGoogle){
    // console.log("You have access to login ")
}