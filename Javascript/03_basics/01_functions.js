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
// console.log(result)


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
loginUserMessage("Bob"); // it won't print the output as we didn't mentioned anything to print 

// console.log(loginUserMessage());





function calculateCartPrice(val1,val2,...num1){
    return num1;
}

console.log(calculateCartPrice(200,300,400,2000,50000));


const user = { 
    username : " Adam",
    price: " 999",
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
 handleObject({
    username:"sam",
    price: 399
 })

 const myNewArr = [200,300,400]
 function returnSecondValue(getArray){
    return getArray[1];
 }
 console.log(returnSecondValue(myNewArr));
 console.log(returnSecondValue([200,300,500,1000]));
 // both works as same ..
