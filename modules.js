

let COUNTER = (function(namespace){
    // Private------------------------------- 
    let count = 0;
    let log = function(){
        console.log(count);
    };
    
    btn = document.querySelector('#btn');
    btn.addEventListener('click', function(){
        count++;
        log(); 
    });
    // getCount is declared as a private function expression, thus can be used as is when being used in other places within the IIFE
    let getCount = function (){
        log();
    };

    // Public---------------------------------
    
    // getCount is made public by refencing it via  a public key
    namespace.getCount = getCount;
    // Because the whole IIFE is being assigned to a variable 'COUNTER', namespace needs to be returned in order for the above public key to be used
    return namespace;
    // What ever is passed in (namespace) and attached to it, is what is returned  

// If COUNTER exists it passes the existing COUNTER in and assigns the public data to it, 
// otherwise a new empty object is passed, the public data is attached to it and assigned to the new variable COUNTER    
})(COUNTER || {});

// In the above example an empty object is passed in and the the return value is assigned to COUNTER, a global variable.  The return value is an object that has a public property function 'getCount' and in its closure 'log()' and 'count'. The objects functionality is accessed via its key:

COUNTER.getCount();





let COUNTER = (function(namespace){
    // Private------------------------------- 
    let count = 0;
    let log = function(){
        console.log(count);
    };
    
    btn = document.querySelector('#btn');
    btn.addEventListener('click', function(){
        count++;
        log(); 
    });
    
    let getCount = function (){
        log();
    };
    // Public---------------------------------
    namespace.getCount = getCount;
    
    return namespace;
        
})(COUNTER || {});


COUNTER.getCount();

