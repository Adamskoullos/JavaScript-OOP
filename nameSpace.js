// Use capitals to initialise a container object to host the namespace
const COUNTER = {};
// write all code related to a group of functions and data and wrap it in an anonymous IIFE
(function(namespace){
    // Private variables 
    let count = 0;
    let log = function(){
        console.log(count);
    };
    
    btn = document.querySelector('#btn');
    btn.addEventListener('click', function(){
        count++;
        log(); 
    });

    // Public method 
    namespace.getCount = function (){
        log();
    };
    // Add the container object as an input
})(COUNTER);

// namespace is used as the placeholder for when the public function is accessed:
COUNTER.getCount();


