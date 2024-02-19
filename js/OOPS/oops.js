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
const date = new Date()