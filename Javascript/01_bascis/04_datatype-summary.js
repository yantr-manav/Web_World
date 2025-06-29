// Primitive Data types

// 7 types --> String, Number, Boolean, Null, undefined, Symbol,BigInt

const score = 100 
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null; // typeof null is "object" since null means empty not zero value
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 123456789876543234567n


// Reference ( Non-Primitive)

// Arrays, Objects, Functions  (typeof all these are objects)

const heros = ["Spiderman", " Captain America", "Iron Man"];
let myObj = {
    name: " saivamshi",
    age: 22,
}
 
const myFunction = function() { 
    console.log("hello World!")
}

console.log(typeof myObj);

