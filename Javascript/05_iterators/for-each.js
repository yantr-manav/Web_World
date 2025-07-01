const coding = ['js', 'java','ruby','python', 'cpp']

coding.forEach(function(item) {
        // console.log(item)
    } 
) // Normal function call 

coding.forEach((item) => {
    // console.log(item)
}) // arrow function

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe) // calling a direct function instead of creating it

coding.forEach((val, index,arr) => {
    console.log(index,val, arr)
})


const myCoding =[ {
    languageName: "javascript",
    langFile:'js',
},
{
    languageName: "python",
    langFile:'py',
},
{
    languageName: "Java",
    langFile:'java',
},
]

myCoding.forEach((item) =>{
    console.log(item.languageName);
})