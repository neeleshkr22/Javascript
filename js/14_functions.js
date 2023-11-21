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

