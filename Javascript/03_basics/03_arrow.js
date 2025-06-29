// +++++++++++++++++++++++++++ Arrow Function +++++++++++++++++

const user = {
    username: "Alice",
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);  // Output: {} empty parenthesis object


function chill (){
    let username = "bob";
    console.log(this);
    console.log(this.username); //output : undefined as "this" works only on object type not in functions
}
// chill() // output: Returns the whole info about the this as object (global) .. try running it 


const chai = () =>{
    let username = "drake";
    console.log(this.username) // output: it returns undefined, so technically it works here
}
// chai() 

// Basic Arrow function syntax
const addTwo = (num1,num2) =>{
    return num1 + num2
}
console.log(addTwo(7,15))

// Implicit return
const addThree = (num1,num2,num3) => (num1 + num2 +num3) // works when you have a single line of code inside the function
console.log(addThree(7,143,22))
const Yourname  = (username) => ({username: " Eleven"})
console.log(Yourname())

// actual usage examples..
const myArray = [2,4,5,7,8]
myArray.forEach(() => ())
