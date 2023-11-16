//Js DATE object represent a single moment in time in a platform independent format. DATE object encapsulation an integral number that represent milliseconds since the midnight at the begninningof january 1, 1970 UTC 
//date has been a long standing pain point in ECMA script. This is the proposal for temporal, a global object that act as a top level namespace.

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023, 0, 23) //we can define (year, month index(starts from 0), date, hours)
console.log(myCreatedDate.toDateString());

//another way of declaring date
//let myanotherOne = new Date(2023, 0, 23, 5, 3)
//console.log(myanotherOne.toDateString());

let myanotherOne = new Date("01-14-2023")
console.log(myanotherOne.toLocaleString());

//timestamp
let myStamp = Date.now()

console.log(myStamp);
console.log(myanotherOne.getTime());

//converting in sec

console.log(Math.floor(Date.now()/1000));

let newDate = new Date() //if we have to get day or date we use get.date or get.day
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);//cuz month index start from 0


newDate.toLocaleString('default', {
    weekday: "long",
})
