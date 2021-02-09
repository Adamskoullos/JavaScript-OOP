// Create a function that adds two numbers and assigns it to a variable by returning the sum.
let add = function (a, b){
    return a + b;
}(2,2);

// Create a function that multiplies the results of the previous function by itself and stores product in a second variable.
let multiply = function (num){
    return num * num;
}(add);

// Create a function that prints to the console the variable that contains the results of the second function you created.
(function (num){
    console.log(num);
}(multiply));

// Example of an IIFE that is called on page load and sets up event listeners, also utilising closure
(function(){
    // the below variables are saved in persistant memory through closure
    let count = 0 ;
    let log = function(){
        console.log(count);
    };
    // The event listener is active after function has completed executing and has access to count and log thereafter
    btn = document.querySelector('#btn');
    btn.addEventListener('click', function(){
        count++;
        log(); 
    });
})();  

