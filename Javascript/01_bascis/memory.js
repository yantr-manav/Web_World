// Stack ( Primitive ) , Heap (Non-Primitive )

let myYoutubename = "chaiaurcode";
let anothername = myYoutubename;

anothername = "freecodecamp";

console.log(anothername);

let user1 ={
    email: "user@google.com",
    upi: "abc@ybl"
}

let user2 = user1

user2.email = "alpha@google.com";
console.log(user2.email)
console.log(user2)
