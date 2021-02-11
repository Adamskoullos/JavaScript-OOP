// Use capitals to signify a namespace which the return value of the IIFE is being assigned to
// write all code related to a group of functions and data and wrap it in an anonymous IIFE
let COUNTER = (function(namespace){
    // Private properties and methods---------------- 
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
    // Public methods-------------------------------- 
    namespace.getCount = getCount; // attach method to object
    
    return namespace; // must return the object to access method

    // If COUNTER already exists pass COUNTER as the input
    // If not, pass an empty object in and add public methods to it and then return the object 
})(COUNTER || {});

// The method made public is accessed using the dot notation
COUNTER.getCount();


let COUNTER = (function(namespace){
    // Private properties and methods---------------- 
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
    // Public methods-------------------------------- 
    namespace.getCount = getCount;
    
    return namespace; 
 
})(COUNTER || {});

// The method made public is accessed using the dot notation
COUNTER.getCount();


