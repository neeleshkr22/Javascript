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
    },1000)
})
