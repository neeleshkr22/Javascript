//memory
//stack,heap

//stack memory used in primitive datatype
//heap memory used in non primitive datatype

//In stack memory we get copy of variable that is declared
//In heap memory we get refrence i.e original value

let myName = "NeeleshKumar"

let anotherName = myName;

console.log(anotherName);

anotherName = "KumarRana"

console.log(anotherName);
console.log(myName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "neelesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);