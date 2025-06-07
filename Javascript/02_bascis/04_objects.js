const tinderUser = new Object() // Representation of Object as Constructor/ Singleton object
// const tinderUser = {} //  representation of object literal

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = true;
console.log(tinderUser);

const regularUser = {
    email:"somename@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sam",
            lastname:"curran"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);// dot is used to refer the value we need to access..

// Optional chaining --> ? is used to check whether the variable exist and do the further process accordingly just like if and else
console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "c", 4:"d"}
// const obj3 = Object.assign({},obj1,obj2); // object.assign(target,source); so usally {} represents target.
const obj3 = {...obj1,...obj2}
console.log(obj3)


const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "gh@gmail.com"
    }
]
console.log(users[1].email)

console.log(tinderUser); // { id: '123abc', name: 'Sam', isLoggedIn: true }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Sam', true ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', true ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))