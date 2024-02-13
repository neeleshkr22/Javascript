/*A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
promise is an object
*/

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() //will connect to .then
    },1000)
})
//.then has a connection with resolve
promiseOne.then(function(){
    console.log("Promise consume");
})


//another way of calling .then and resolve
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolve");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Neelesh", email: "neeleshrana22@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);   //will get all the parameter of resolve
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(()=> {
        //let error = true;
        let error = false;
        if(!error){
            resolve({username : "Neelesh", password: "1234"})
        }else{
            reject('ERROR: Something went wrong')                              //reject will throw error
        }
    },1000)
})

promiseFour.then((user)=> {
    console.log(user);
    return user.username;
}).then((username)=>{                    //chaining 
    console.log(username);
}).catch(function(error){
    console.log(error);
})
