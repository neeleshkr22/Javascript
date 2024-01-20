//for

/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/

/* for(let i = 0; i <= 10;i++){
    const element = i ;
    if(element == 5){
        console.log("Here it is ");
    }
    console.log(element);
} */

for(let i = 0; i<= 10;i++){
    console.log(`Outer loop ${i}`);
    for(let j = 0; j<10;j++){
        console.log(`inner loop ${j} and iner loop ${i}`);
    }
}

for(let i = 0; i<= 10;i++){
    console.log(`Outer loop ${i}`);
    for(let j = 0; j<10;j++){
        console.log(i + " * " +j+ " = " + i*j);
    }
}

//for array
let myArray = ["flash", "superman", "batman"]
console.log(myArray.length);
for(let i =0;i< myArray.length;i++){
    const element = myArray[i];
    console.log(element);
}

//keywords
//break and continue

for(let i = 0; i<= 20;i++){
    if(i == 5){
        console.log("Detected 5");
        break; //if it is found then rest will not execute
    }
    console.log(`Value of i is  ${i}`);
}
for(let i = 0; i<= 20;i++){
    if(i == 5){
        console.log("Detected 5");
        continue; // rest will  execute
    }
    console.log(`Value of i is  ${i}`);
}


//--------------------------------------------------While loops -----------------------------------------------------------------
//write code for while loop

/*let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}*/

//do while loop

let i = 0;
do{
    console.log(i);
    i++;
}while(i <= 10);


//------------------------------------------Higher order array loops-------------------------------------------------------------

//for of loop

["", "", ""]
[{}, {}, {}]

const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}

const greetings = "Hello world";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

//Maps
//It is an object that holds the keys and values pairs and remember the original insertion order of the keys.
//Map is not ittratable so can't use for in loop
const map = new Map()
map.set('IN', "India")
map.set('US', "United state")
map.set('FR', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

/*const myObj = {    //object is not iterable in for of loop
    'Game' : 'NFS', 
    'Game2' : 'GTA'
}
for (const [key, value] of myObj) {
    console.log(key ,':- ', value);
    
}*/


const myObj = {
    js : 'Javascript',
    cpp : 'C++',
    java : 'Java'
}
for(const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "cpp", "java", "rb"]

for(const key in programming){
    console.log(programming[key]);
}

//--------------------------------------------------For each loop ---------------------------------------------------------

const coding = ["js", "cpp", "java", "python", "rust"]

coding.forEach(function (val){
    console.log((val));
})

coding.forEach((item) => {
    console.log(item);
})

function printme(item){
    console.log(item);
}
coding.forEach(printme)

coding.forEach((item, index, array) => {
    console.log(item, index, array);
})

const values = coding.forEach((item) => {  //for each do not return anything
    return item;
})
console.log(values);

const mycoding = [
    {
        languageName : 'Javascript',
        languagefilename : 'JS'
    },
    {
        languageName : 'Java',
        languagefilename : 'java'
    },
    {
        languageName : 'C++',
        languagefilename : 'cpp'
    }
]
mycoding.forEach((item) => {
    console.log(item.languageName);
})

//----------------------------------------------Filter---------------------------------------------------------------
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=> {
    return num > 4
})
/*const newNums = []
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})*/
console.log(newNums);


const books = [{
    bookname : 'bookone',
    genere : 'History',
    published : 1990
},
{
    bookname : 'booktwo',
    genere : 'Science',
    published : 2002
},
{
    bookname : 'bookthree',
    genere : 'English',
    published : 1997
},
{
    bookname : 'bookfour',
    genere : 'History',
    published : 2002
},
{
    bookname : 'bookfive',
    genere : 'Fiction',
    published : 2011
}]

const book = books.filter((bk) => {
    return bk.published>=1990 && bk.genere == "History"
})
console.log(book);
