const marvel_heroes = ["Thor","Ironman","Spiderman"]
const dc_heroes = ["Superman","Flash","Batman"]
const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);
const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray(["Jungle"])); // to check whether the variable is an array or not..
console.log(Array.from("Junlge"));
console.log(Array.from({name:"Jungle"})); // interesting: since compiler doesn't know how to take an array from key: value pair unless specified 


const score1 = 100;
const score2 = 200;
const score3 = 300
console.log(Array.of(score1,score2,score3));