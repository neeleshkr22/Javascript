const score = 400
//new keyword use to make datatype fix
const balance = new Number(100.344)
console.log(balance);
console.log(score);
//prototypes
console.log(balance.toString())
console.log(typeof balance);
console.log(balance.toString().length);

console.log(balance.toFixed(2)); //makes fixed precesion value

const otherNum = 23.950

console.log(otherNum.toPrecision(2)); //precise value and roundoff

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //makes , for making better readiblity

//max value and min value
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


//**************************************************maths***************************************************************

console.log(Math);
console.log(Math.abs(-4)); //abs is absolute value (just sign change)
console.log(Math.round(4.8));
console.log(Math.ceil(4.2));//just check top value and round off
console.log(Math.floor(4.2));//just take lowest value
console.log(Math.sqrt(25));
console.log(Math.min(25, 27, 2, 5));
console.log(Math.max(2, 5, 5, 56));

//math library used in math.random

console.log(Math.random()); //gives values between 0 and 1 always
console.log(Math.random()*100);
console.log((Math.random()*10)+ 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
