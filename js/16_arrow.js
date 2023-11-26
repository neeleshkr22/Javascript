const user ={
    username: "neelesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //this means current context
        //console.log(this);
    }
}

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this);


function one(){
    let username = "neelesh"
    console.log(this.username); //this can not be used in function
}
one();

//another way of declaring function using arrow
const two = () => {
    console.log("hello");
}

const addtwo = (num1, num2) => {
    return num1+num2;
}
console.log(addtwo(4,4));

//implicit return 
const addition = (num1,num2) => num1 + num2;
//if we used curly braces{} we have to write return keyword if we used paranthesis( ) we do not use return keyword

//for object
const name = () => ({username: "neelesh"})
console.log(name());