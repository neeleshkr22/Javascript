//Immediately Invoked Function Expression (IIFE)
//to prevent global scope we use IIFE

(function one(){
    //named IIFE
    console.log("DB connected");
})();


( (name) => {
    console.log(`DB connected ${name}`);
})('Neelesh');


