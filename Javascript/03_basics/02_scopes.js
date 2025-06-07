// Scopes of let, var and const {}


let a = 10
const b = 20
var c = 30

// var or without declaring any variable ; the value can be accessed from anywhere leading to confusion when multiple users works on same code files. 

if(true){
   
   let a = 300
   console.log("Block scope: ",a)
    // anything declared here  is limited to here only cuz of block scope
}

console.log("Global scope ",a)
// console.log(b)
// console.log(c)

for(let i=0;i< Array.length; i++){
    const element = array[i];
    // 'i' declared here should be within this block scope and can't  be accessed to use in the global scope.
}

