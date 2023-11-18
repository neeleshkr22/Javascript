//array enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

const myArr = [0,1,2,3,4,5, true] //elements can be of diffrent datatypes 
//accessing
console.log(myArr[0]);

//diffrent methods to initialize array in js
const myHeroes = ["superman", "thor"]
const myArr2 = new Array(1,2,3,4);

//array methods

myArr.push(6);
console.log(myArr);
myArr.push(7);
console.log(myArr);
console.log(myArr);
myArr.pop(); //will remove last elemt of array
console.log(myArr);

myArr.unshift(9); //add a element at 0th index
console.log(myArr);

myArr.shift();
console.log(myArr); //will shift to original place

console.log(myArr.includes(7)); //check if it is in array or not (return type is boolean)
console.log(myArr.indexOf(4)); //give the position

const newArr = myArr.join() //bind and convert to string
console.log(newArr);
console.log(typeof newArr);


//slice & splice

console.log("N", myArr);
const myN1 = myArr.slice(1,4) //it will start from 1 index to 4th index and print their elments but not include 1 and 4
console.log(myN1);
console.log("B ", myArr);
const myN2 = myArr.splice(1,2); //manupilate the original array
console.log(myArr);

const heroes = ["thor", "ironman","spiderman"]
const heroes2 = ["superman", "batman","flash"]

heroes.push(heroes2) //will takes heroes2 array as a single data elment
console.log(heroes);
console.log(heroes[3][1]);

const allheroes = heroes.concat(heroes2); //will retuen new array
console.log(allheroes);

//spread operator(...) will spread the element
const all_new = [...heroes,...heroes2]
console.log(all_new);

//flat will take numbers and check in depth

const an_array = [1,2,[2,4,5,6],7,8,9,[4,5,6],5]

const real_array = an_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("neelesh"))
console.log(Array.from("neelesh")); //will convert it in array
console.log(Array.from({name: "neelesh"})); //interesting
let score1 = 100;
let score2 = 200;
let score3 = 300;
//.of returns a new array of an element
console.log(Array.of(score1,score2,score3));
