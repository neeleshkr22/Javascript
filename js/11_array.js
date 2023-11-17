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

heroes.concat(heroes2);
console.log(heroes);
