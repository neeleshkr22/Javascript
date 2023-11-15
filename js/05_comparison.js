console.log(2 > 1);
console.log(2 <1);
console.log(2 <= 1);
console.log(2 >= 1);
console.log(2 != 1);
console.log(2 == 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);//comparison convert null to a number, treating it as 0. < & == check are works diffrently
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);

// === (strict check) check strictly with datatype

console.log("2" === 2);
console.log(2 === 2);