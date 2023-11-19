//object can b declared in two types :- literal or constructor
//object is singleton(when object is made from constructor)
//in literals object is not singleton

//Object.create //constructor method
//object literals
const mySym = Symbol("key1");

const Jsuser = {
    name: "neelesh",
    "full name": "Neelesh",
    //mySym: "mykey1",
    [mySym]: "key2", //if we want to add key to symbol variable we use []
    age: 18,
    location: "delhi",
    email: "neeleshrana22@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday","sunday"]
}
console.log(Jsuser.name);
console.log(Jsuser["email"]);
//can't access full name object
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);

Jsuser.email = "neeleshkumar22@gmail.com"//we can overwrite the value of object through =
//Object.freeze(Jsuser)       //use lock the object so can not change the value
Jsuser.email = "nk@gmail.com"
console.log(Jsuser);


//adding function in object
Jsuser.greetings = function(){
    console.log("hello jsUser");
}

console.log(Jsuser.greetings());

Jsuser.greetings2 = function(){
    console.log(`hello jsUser ${this.name}`);//we use this.(object element name) to access the elements of object in baktix 
}
console.log(Jsuser.greetings2());

//const whatsapp = new Object() //singleton object
//const whatsapp = {} //non - singleton object

const whatsappUser = {}

whatsappUser.id = "12345abc"
whatsappUser.name = "neelesh"
whatsappUser.isloggedin = false

//console.log(whatsappUser);

const regularUser = {
    email: "sum@gmail.com",
    fullname: {                //object inside object
        userFullname: {
            firstName: "Neelesh",
            lastName: "Kumar"

        }
    }
}

console.log(regularUser.fullname?.userFullname.firstName); //helps in checking if it is  there or not
//combining objects together

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4:"d"}
//const obj3 = {obj1, obj2}
//console.log(obj3);   //will not combine

//const obj3 = Object.assign({}, obj1, obj2) //{} act as a target and obj1 , obj2 act as source
//another way
const obj3 = { ...obj1,...obj2} //spread operator
console.log(obj3);


const users = [ //array of an object
    {
        id: 1,
        email: "neelesh@gmail.com"
    }
]

console.log(users[0].email);

console.log(Object.keys(whatsappUser)); //object to array
console.log(Object.values(whatsappUser));
console.log(Object.entries(whatsappUser));

console.log(whatsappUser.hasOwnProperty('isloggedin'));//check if the property is there or not

const course = {
    course: "Javascript",
    price: "999"
}
const {price}= course //destructuring
console.log(price);





