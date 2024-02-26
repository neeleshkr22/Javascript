//JS and classes
/*OOPS
# Object :-
-collections of properties and method
-tolowercase

# Parts of obkject oriented programming
Objetc literal

-Constructor function
-Prototype
-Classes
-Instances(new,this)


#Four Pillers
-Abstarction - eg (fetch)
-Inheritence 
-Encapsulation
-Polymorphism
*/

//Object literal
const user ={
    name : "Neelesh",
    LoginCount : 8,
    SignedIn : true,

    getUserDetails: function(){
        console.log("Got user details from db");
        console.log(this.name);
        console.log(this);                            //this means current context
    }
}
console.log(`Name is ${user.name}`);
console.log(`Name is ${user.getUserDetails()}`);
console.log(this);                //give empty parenthesis and it will change

//Constructor Function
//const promiseOne = new Promise();

function User(username,logincount,isloggedin){
    this.username = username              //left hand side value is variable   //right hand side is thenvalue that we pass
    this.logincount = logincount;
    this.isloggedin = isloggedin
    this.greetings = ()=>{
        console.log(this.username);
    }
    //return this;    implict defined already 
}

const userOne = new User("neelesh", 22, true);  //new keyword create empty object known as instance
const userTwo = new User("Zord", 10,true)
console.log(userOne.constructor);     //give refrence to itself
console.log(userTwo);
