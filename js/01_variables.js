const accountId = 144553
let accountEmail = "neelesh@kumargmail.com"
var accountPassword = "12345"
accountCity = "delhi" //js can store variable without declaring it 
let accountState;

//accountID = 1 (const cannot change)
/*
 var is old because of issue in block scope and functional scope
*/

accountEmail = "Hns@mjj"
accountPassword = "2121"
accountCity = "Bengaluru"

console.log(accountId); //use for print
console.log(accountEmail);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])