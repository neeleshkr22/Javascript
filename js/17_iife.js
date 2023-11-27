//Immediately Invoked Function Expression (IIFE)
//to prevent global scope we use IIFE
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

(function one(){
    //named IIFE
    console.log("DB connected");
})();


( (name) => {
    console.log(`DB connected ${name}`);
})('Neelesh');

(() => {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();

// firstVariable and secondVariable will be discarded after the function is executed.

