const mynums = [1,2,3,4,5,6,7,8,9]
const newnums = mynums.map((num) => num+10)
console.log(newnums);

//chaining method:- many methods can use directly like(map + map +filter)

const newNums = mynums.map((num) => num *10)             //the result will go to second method
                      .map((num) => num + 1)
                      .filter((num)=> num >= 40)
console.log(newNums);

//------------------------------------------Reduce method--------------------------------------------------------

//accumulator :- empty variable that has value initialized first
//current value :- value that is in array

const mynumber = [1,2,3]

const myTotal = mynumber.reduce(function (acc, currval){      //can be write using arrow function
    console.log(`acc: ${acc} and curval : ${currval}`);
    return acc + currval
},0)
console.log(myTotal);

const course = [{
    itemName : 'Ai',
    price : 2000
},
{
    itemName : 'Python',
    price : 1999
},
{
    itemName : 'Data science ',
    price : 2500
},
{
    itemName : 'Machine learning',
    price : 2550
},]

const Total = course.reduce((acc,item) => {
    return acc + item.price
},0)

console.log(Total);
