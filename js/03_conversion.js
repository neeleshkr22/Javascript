let score = "22abc"
let value = null;
let value2 = undefined;
console.log(typeof score);
console.log(typeof (score));
console.log(typeof (value));
console.log(typeof (value2));


let valueInNumber = Number(score)
let valueInv = Number(value)
let valueInN = Number(value2)
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log(typeof valueInv);
console.log(typeof valueInN);
console.log(valueInN);
console.log(valueInv)

//number "22" => number
//"22abc" => nAn
// true => 1
//false => 0
//null => 0
//undefined => nan
//" "=> false
//"neelesh "=> true

let isloggedin = 1;
let booleanisloggedin = Boolean(isloggedin); //we use dataype from which we have to convert before bracket like here Boolean(variable) we can do Number(variable), String(variable) & so on..
console.log(typeof booleanisloggedin);
console.log(booleanisloggedin);

let islive = ""
let booleanislive = Boolean(islive)
console.log(typeof booleanislive);
console.log(booleanislive);

let isLive = "Neelesh"
let booleanisLive = Boolean(isLive)
console.log(typeof booleanisLive);
console.log(booleanisLive);