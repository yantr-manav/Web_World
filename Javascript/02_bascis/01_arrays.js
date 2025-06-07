// Arrays 

const myArr = [0,1,2,3,4,5];
// console.log(myArr);
const myHeroes = ["Shaktiman","Nagraj"];
// console.log(myHeroes);
const myArr2 = new Array(1,2,3,4,5);
// console.log(myArr2)

// //Array methods
// myArr.push(6);
// myArr.push(7);
// myArr.pop(); // removes the last entered element
// console.log(myArr);
// myArr.unshift(9); // It adds the element at start of the array
// console.log(myArr);
// myArr.shift(3); // Removes the element from the beginning of the array
// console.log(myArr);

// console.log(myArr.includes(9)); // returns boolean based on the presence of the value in the variable.
// console.log(myArr.indexOf(2)); //returns the index of value else returns -1 in the absence..

const newArr = myArr.join()
// console.log(newArr)
// console.log(typeof newArr); //string

// Slice and Splice
console.log("A ",myArr);
const myn1 = myArr.slice(1,3); // Its shows the view of the array and doesn't change the original array
console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3); // It changes the entire array by removing the elements mentioned from the original array and shows it
console.log(myn2);
console.log("C ", myArr);

