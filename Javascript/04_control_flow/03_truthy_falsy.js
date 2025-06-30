const userEmail = "abc@gmail.com";

if (userEmail){
    // console.log("Got the email")
} else{
    // console.log("Don't have user email")
}

// Falsy Values:
    //  false, 0,-0,null, undefined,NaN, "",BigInt 0n;

 //Truthy values
    // "0","false", " ",[],{},function(){}

if (userEmail.length === 0){
    console.log("Array is empty")
}

const empytyObj = {}
if (Object.keys(empytyObj).length === 0 ){
    // console.log("Object is empty")
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// assigns the first value and if it can't able to assign it then it goes for the next value 
// val1 = 5 ?? 10
// val1 =  null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 20 ?? 10
console.log(val1)

// Ternary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("more than 80"): console.log("less than 80")