//var c = 300; //global scope
let a = 300;
if (true) { //block scope
    let a = 10;
    const b = 20;
    //var c = 30;
    console.log("inner: " , a);
}
console.log(a);
//console.log(b);
//console.log(c); //var does not have scope

{
    //scope
}

function one(){
    const username = "neelesh"

    function two(){   //function two will take varibale from function one but not vice versa
        const website = "you tube"
        console.log(username);
    }
    //console.log(website);

    two()
}

one()

//*********************************************interesting ****************************************************/
//two ways of function
addone(5); //can access before declaration
function addone(num){
    return num + 1;

}
//hoisting (can't access before the declaration of function)
addtwo(5);
const addtwo = function(num){
    return num  +2;
}
