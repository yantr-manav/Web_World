// Objects
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key,value] of myObject){
//     // console.log(key,':-',value)
// } // This is the wrong way for iteration of Obejcts so it won't work here



const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

// For Arrays
const programming = ['js','rb','py', 'java','cpp']

for(const key in programming){
    // console.log(key) // this will return index of arrays not actual keys
  console.log(programming[key]); // used to return key-values of array
}


// For Maps

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('EUR','Europe')
map.set('JPN','Japan')
// console.log(map)

for (const [key,value] in map){
    console.log(key, ':-', value); // note: Map is not iterable so u won't be able to traverse it
}