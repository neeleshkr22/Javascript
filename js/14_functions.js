//function is used to create a package for a code that can use again and again

function sayMyName(){  //function
    console.log("Neelesh Kumar");
}
sayMyName  //refrence 
sayMyName();   //execution

/*function addition(number1, number2){  //passing value or datatype is known as parameters
    console.log(number1+number2);
    console.log(number1-number2);

}*/

function addition(number1, number2){  //passing value or datatype is known as parameters
    let result = number1 + number2;
    console.log("hello");
    return result;

}

const result = addition(9,5);
console.log(result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());   //when we don't pass any value it will show undefined

function login(){
    console.log("Hello Neelesh kumar Rana");
console.log(login);

    // function definition
function calculateBill() {
  // this is the function body
  console.log("Running Calculate Bill!!");
}
// function call or function invocation
calculateBill();

function calculateCartPrice(...num1 ){  //rest operator(...) for multiple values
    return num1      
}
console.log(calculateCartPrice(200,2303,389));

//function for object
const user = {
    username: "neelesh",
    age: 18
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}

handleObject(user);


//array
const mynewArray = [200,400,600]

function returnSecondValue(getarray){
    return getarray[1]
}

console.log(returnSecondValue(mynewArray));
