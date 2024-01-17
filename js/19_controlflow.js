//if statement

/*if(condition){
    if  condition is true then it will execute. 
    if false then will not execute
} */

const isUserloggedin = true;
const temperature = 8;
if(isUserloggedin == true){
    console.log("User is logged in ");

}

if(2 == "2"){    //for checking data type too we will use (===) strict equal operator. This will check data type too. if both data types are equal it will execute if not then will not execute just like here 2 === "2" will not execute.
    console.log("executed");
}

if(2 !=3){
    console.log("true");
}

if(temperature > 10){
    console.log("Temprature is more than 10");
}else{
    console.log("Temprature is less than 10");
}

add = (num1,num2) => {
    let result = num1 + num2;
    if(result >= 10){
        console.log(result);
    }else{
        console.log("Less than 10 ");
    } 
}
let value = 1
let value2 = 9
add(value,value2)

//short-hand notation
const balance =1000;

if(balance > 500) console.log("test"), console.log("test2");  //implicit scope

if (balance < 500) {
    console.log("less than");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log(`balance is ${balance}`);
}

const userloggedin = true
const debitcard = true
const loggedinfromGoogle = false
const loggedinfromEmail = true

if(userloggedin && debitcard && 2==2){                             //&& means and, if any condition get false then it will not execute
    console.log("allow to buy items");
}

if(loggedinfromEmail || loggedinfromGoogle){                      // to check multiple condition (or)
    console.log("user logged in");
}

//Nullish Coalescing Operator(??): null, undefined
let val1;
val1 = 5 ?? 10
//to treat if null then take it as a null value if given a value then take it as a value
console.log(val1);
val1 = null ?? 10;
console.log(val1);
val1 = undefined ?? 15
console.log(val1);


//new format of control flow
//switch case statement
//syntax:-
/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */

const month = 1;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    
    default:
        console.log("Default");
        break;
}


//truthy value and falsy value

const userEmail = "neelesh@gmail.com";
if(userEmail){                                //we assume somthing true it will known as truthy....Empty array consider true and empty string consider false
    console.log("Got user email");
}else{
    console.log("no email");
}

//falsy values are:-
// false,0,-0,Bigint 0n,"",null,undefined,NaN

//truthy values are:-
// true, [], "0",'false'," ",{},function(){}

const userarray = [];
if (userarray.length === 0) {
    console.log("Empty array");
}else{
    console.log("undefined");
}

//for empty object
const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Empty object");
}else{
    console.log("Not executed");
}


//terniary operator
//condition ? true : false  
//terniary operator is different from null coaliscon operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");