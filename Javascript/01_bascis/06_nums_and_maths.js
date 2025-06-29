// const score = 443;
// const balance = new Number(100);
// console.log(balance);
// console.log(score);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // value after decimal points


// const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3)); // rounds off the value with inclusive of the actual number before decimal point
// const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN')); //helps in putting commas to number to make it readable that is converts the number to a string formatted according to locale ( regional language and cultural format specified (en-IN in this case))



// *********************** MATHS *************************

console.log(Math)
console.log(Math.abs(-4)); // returns always a positive number

console.log(Math.round(4.678)); //rounds off the value to nearest decimal 

console.log(Math.floor(4.2)); // returns the main value before decimal 

console.log(Math.ceil(4.5567898)); // returns the next number if it's even slight more than the number itself like num == 5 if it's even 4.1 

console.log(Math.random()); // returns always a random value between 0 and 1

console.log(Math.random()*10 + 1); // this ensures the number is never zero 
// Explanation:  if you use only random method it can be possible that it can return 0 sometimes and even if we multiply it by 10 some numbers like .. 0.00564365546 will be still 0 therefore, it is advised to add 1 after multiplying it from 10 ..
// Question for me as well : Why can't we directly add with 1 instead of multiplying with 10???


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max -min + 1))+ min)