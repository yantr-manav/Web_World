const coding = ['js', 'java','ruby','python', 'cpp']

const values = coding.forEach((item) => {
    // console.log(item)
    return
}) // arrow function
console.log(values);

// Note: forEach returns undefined every time i.e, it doesn't return anything

// Filter operation
const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter((num) => num>4)
const newNums = myNums.filter((num) => {
    return num>4
    // Both works same
})
// console.log(newNums);

// Note : Difference between foEach and Filters is that : forEach doesn't return anything meanwhile filter return the value  directly
// forEach can also work but u have to write more code with logic bas.

const newNum = []
myNums.forEach((num) =>{
    if (num>4){
        newNum.push(num)
    }
})
// console.log(newNum);


// Mimicking of Data retrieval from Databases.
const books = [
    {
        title: "Book One", genre: 'Fiction', publish: 1981, edition: 2004
    },
        {
        title: "Book Two", genre: ' Non-Fiction', publish: 1989, edition: 2005
    },
        {
        title: "Book Three", genre: 'Science', publish: 1988, edition: 2006
    },
        {
        title: "Book Four", genre: 'History', publish: 1987, edition: 2007
    },
        {
        title: "Book Five", genre: 'Philosophy', publish: 1984, edition: 2008
    },
        {
        title: "Book Six", genre: 'Horror', publish: 1982, edition: 2000
    },
        {
        title: "Book Seven", genre: 'Crime-thriller', publish: 1983, edition: 2022
    },
];

let userBooks =  books.filter((bk)=> bk.genre === "History")
userBooks =  books.filter((bk)=> bk.publish >= 1984 || bk.genre === "Philosophy")

console.log(userBooks)


