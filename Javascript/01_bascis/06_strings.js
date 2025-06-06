const name = "Bezoz"
const repoCount = 50;
console.log(name + repoCount +" value"); // bad code writing 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // code readability enhances

const gameName = new String ('Blue-origin-game')
console.log(gameName)
console.log(gameName[0])
console.log((gameName.__proto__));
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "  kaychaalle  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com";
console.log(url.replace('google.com','youtube.com'));
console.log(url.includes("sundar"));     //checks whether the word is there or not
console.log(gameName.split('-'));
