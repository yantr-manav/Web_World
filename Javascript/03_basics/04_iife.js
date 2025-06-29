// Immediately Invoked Function Expression ( IIFE )


// it can also be called as named IIFE
(function chill () {
console.log("DB Connected");
})(); //never forgot to add semicolon to terminate iife..


 ((username) => {
    console.log(`This can also be printed using IIFE, ${username}`)
 }) ("Kay");
