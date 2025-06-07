// Scopes of let, var and const {}


let a = 10
const b = 20
var c = 30

// var or without declaring any variable ; the value can be accessed from anywhere leading to confusion when multiple users works on same code files. 

if(true){
   
   let a = 300
//    console.log("Block scope: ",a)
    // anything declared here  is limited to here only cuz of block scope
}

// console.log("Global scope ",a)
// console.log(b)
// console.log(c)

// for(let i=0;i< Array.length; i++){
//     const element = array[i];
//     // 'i' declared here should be within this block scope and can't  be accessed to use in the global scope.
// }

function one(){
    const username = "Alice"

    function two(){
        const website = " youtube"
        console.log(username)
    }
    // console.log(website); // it wont be executed as it is out of the block scope.
    two();
}
// one();

if (true){
    const username = "bob"
    if(username === "bob"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); // out of scope
}
// console.log(username); // out of scope




// +++++++++++++++++++++++++++ INTERESTING +++++++++++++++++

function addone(num){
   
    return num + 1;
}
 console.log(addone(5)); // if it is declared even before the function ,  we can still access it 

console.log(addtwo(5)); // But it isn't possible with this call of function as it's declaration is different as we are declaring a variable for function it cant be accessed before initialized
const addtwo = function(num){
    return num + 2
}

// This unusual behaviour of function calling is called mini hoisting..