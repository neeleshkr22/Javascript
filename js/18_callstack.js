/*execution context
calls(call stack) how function execute in memory
global execution context
Javascript execution context divides programmes in two phase refers it to (this). Global execution context of node js is diffrent, web is diffrent, bun is diffrent and execute in thread
context are of types:
Global Execution Context 
Function execution Context
Eval Execution Context

Javascript run in two phase:
Memory creation phase(or called creation phase): In this phase only memory is allocated to variables function 
Execution phase: Code is executed in this phase
 For everytime the code is executed, a context is created, which consist of:
 New Variable environment
  execution thread
It returns the variable to parent context ie. global execution context, and then it is delete to free up the memory
*/

let val1 = 10;
let val2 = 5;
function addnum(num1,num2){
  let total = num1 + num2;
  return total;
}
console.log(addnum(2,6));
let result1 = addnum(val1,val2);
console.log(result1);
