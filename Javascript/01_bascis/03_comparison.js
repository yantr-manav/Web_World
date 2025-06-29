// Comparison of Data- types : 

// console.log(2>1); // this is comparison of values

// console.log("2"> 1);
// console.log("02"> 1);

console.log(null> 0); //false
console.log(null == 0); // false
console.log(null >=0); // true 

// Reason :  Equality check (==) and comparisons (>, <, >=,<=) works differently. 

// Comparisons convert null to a number, treating it as 0. That's why(3) null >=0 is true and (1) null > 0 is false.


console.log(undefined > 0); // false 
console.log(undefined <0); // false
console.log(undefined == 0);  // false

//  strict check : ===

console.log( 2  === " 2") //false ; reason: strict checks the datatype as well along with value.