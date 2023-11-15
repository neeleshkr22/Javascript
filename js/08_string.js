const name = "neelesh"
const repoCount = 10


//console.log(name + repoCount + " Value" );

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //String interpolation we can use baptix `` to add different datatypes together


const gameName = new String('Neelesh-kr') //another way of declaring string

console.log(gameName[0]);
console.log(gameName.__proto__); //prototype

//objects for string

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4)); //to find character in position
console.log(gameName.indexOf("s")); //to find the index

const newString = gameName.substring(0, 4) //to divide the string in substring we give staring num and end num for getting sub string
console.log(newString);

const anotherString = gameName.slice(0,4) 
const anotherString2 = gameName.slice(-3,4) //print in reverse
console.log(anotherString);
console.log(anotherString2);

const newone = "  neelesh  "
console.log(newone);
console.log(newone.trim()); //remove extra spaces 


const url = "https://neelesh.com/neelesh%22kumar"

url.replace("%20", '_') //replace the % type in url to spaces 
console.log(url.replace("%22", '-'));

console.log(url.includes('neelesh'));//include use to find some words in string

console.log(gameName.split('-'));