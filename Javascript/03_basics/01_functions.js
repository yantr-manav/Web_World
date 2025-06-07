function sayMyName(){
    console.log("H");
    console.log("E ");
    console.log("L");
    console.log("L");
    console.log("O");
}
// sayMyName();

// function addTwoNumbers(num1,num2){ // parameters
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1,num2){ // parameters
   return num1 + num2;
}

const result = addTwoNumbers(7,22); // arguments
console.log(result)


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
loginUserMessage("Bob"); // it won't print the output as we didn't mentioned anything to print 

console.log(loginUserMessage());

