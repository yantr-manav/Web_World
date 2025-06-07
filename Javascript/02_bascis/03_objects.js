//  Constructors --> Singleton 
// Object.create



// Object literals
const mySym = Symbol("key1");
const JSuser = {
    name: "Ironman",
    "fullName": "Ironman Son of Shaktiman",
    age : 22,
    [mySym]: "mykey1", // [] used to represent symbols 
    location:"marvel_universe",
    email: "ironman@marvel.com",
    isLoggedIn: false,
    lastLoginDays:["Monday"],
}

console.log(JSuser["age"])
console.log(JSuser.age)
console.log(JSuser.fullName);

console.log( JSuser[mySym])


JSuser.email = "marvel@universe.com"
console.log(JSuser)
// Object.freeze(JSuser) // it is used to lock the object and we can't make changes to it unless removed
JSuser.email = "wanna@tryagain.com"
console.log(JSuser)


JSuser.greeting = function(){
    console.log("Hello guys!");
}

JSuser.greeting2 = function(){
    console.log(`Hello,${this.name}`);
}


console.log(JSuser.greeting); // gives function[anonymous] 
console.log(JSuser.greeting());
console.log(JSuser.greeting2());