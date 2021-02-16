# JavaScript OOP Reference Guide

### A resource for junior devs in their transition to mid level
#### My study covers both the traditional syntax and the newer ES6 patterns. This is a working document being crafted as I develop deeper levels of practical understanding.  Click the links below to go straight to the section of interest.  

#### ToC:
1. **Classes, Constructor & Factory Functions**
2. **The prototype chain**
3. **Prototype Inheritance**
4. **Mixins**
5. **Closures**
6. **IIFE - Immediately Invoked Function Expression**
7. **Namespace Pattern**
8. **Module Pattern**

----------------------------------------------------------------------

### Classes, Constructors & Factory Functions

**Factory functions** return an object without using the 'new' keyword, they also do not use the 'this' keyword. Factory functions can add any private properties and behaviours before the return statement to be included in the closure when the object is returned and assigned to the new variable name.
Factory functions are the most explicit way of creating new objects, they are great however we now have constructors.

**Constructor functions** use the 'new' and 'this' keywords in their pattern, below is an example of the constructor function pattern using parameters which allow values to be dynamically added as each new instance is created.  They do not return a value, they return a new object:

```
function Car(make, model, price){
  this.make = make;
  this.model = model;
  this.price = price;
} 

let sportsCoupe = new Car('Toyota', 'Supra', 60000);
```

Adding prototypes to constructors can be done with the following pattern:

```
Car.prototype.salePrice = function (){
  return this.price * 0.90;
};

sportsCoupe.salePrice(); // 54000
```
The example above shows how objects created from the constructor inherit the prototypes of the constructor.  Side note, this object also inherits any further prototypes up the chain with the global Object.prototype methods being at the top. More on this later. 

The advantage of adding prototypes to constructors is that they only need to be added and changed in one place making data storage and maintaining the code base more efficient.  

The method `sportsCoupe.hasOwnProperty(price);` can be used to check if a property exists on an object.  This will return false if the property is a prototype of the object.

We can also check an objects constructor, however unless a constructor has explicitly been assign itself as its constructor each new object would have the default constructor of the global Object.  Here is the pattern to use when assigning prototypes to the constructor to ensure each new object is assigned its immediate parent as its constructor:

```
Car.prototype = {
  constructor: Car, // This is the bit to remember
  salePrice: function (){ 
  return this.price * 0.90;
};
}


Car.prototype.isPrototypeOf(sportsCoupe);
// This would now result in true
```

As a rule of thumb properties are saved to the constructor which in turn becomes the own property of each new instance. Methods are saved as prototypes on the constructor.  This assumes that property values are largely specific to each new instance and method functionality is largely shared.  This allows the methods to be saved once and accessed by each new instance and also any changes are only made to the constructors prototype and not to each instance.


**Classes** abstract the act of adding prototypes and allow all the code relating to properties and behaviour to be encapsulated within the class scope. Adding prototypes to classes is quick and clean and also easier to reason about when approaching unfamiliar code. 
The below example shows the class pattern structure in the form of a declaration.  Notice the constructor function within and below that the prototype methods:

```
class Vehicle {
  constructor(){
    this.type = type;
    this.wheels = wheels;
    this.fuel = fuel;
  }
  forwards(){
    return 'moving forwards';
  }
  stop(){
    return 'stopped';
  }
}

```

**Class Inheritance** is when an existing class is used as the basis to create a new class. The new class inherits the existing classes own and prototype properties and can also add it's own.  We could instead of using the constructor to make a Car as in an earlier section, create a Car class be using class inheritance:

![Screenshot from 2021-02-16 09-25-51](https://user-images.githubusercontent.com/73107656/108043679-4b144b00-7039-11eb-8563-f93c4a7d5994.png)

Classes can be structured in different ways and deserve a lot more time than what has been spent here. Visit the [classes page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) on the MDN mozilla site to learn much more. 


### The prototype chain


### Prototype Inheritance


### Mixins


### Closures
-------------------------------------------------------------------

### IIFE - Immediately Invoked Function Expression

Below is an example of an IIFE in the form of an anonymous function.  The parentheses at the end of the code calls the function immediately.  Notice that there is an extra set of parentheses wrapping the declaration.  This is because when annonymous, the word function cannot be the first characters in the statement.  The second bracket can either be placed just before or after the parentheses that invoke the function:  

![Screenshot from 2021-02-09 13-48-17](https://user-images.githubusercontent.com/73107656/107372808-b9a75500-6add-11eb-8cfa-23daf33632b9.png)


**Code snippet example to be added here**
------------------------------------------------------------------

### Namespace Pattern

The below example shows how to structure and create a namespace object using an IIFE in a way that takes advantage of closure: 

First a global variable is initialised using the capital letter convention.  This is the key to access any public variables or methods that are returned.
Next define the IIFE passing it an existing variable with the same name used or if it does not already exist, an empty object.

Then define all private variables and methods and then the public methods.  Notice how the public method is made public by referencing it with the passed in public variable, which becomes accessible when the public variable/object is returned.

When the page loads, the function is invoked, the closure takes place and the method 'getCount' is made public by being attached to the variable/object passed in which is then returned to the global variable 'COUNTER'. 

COUNTER can call the getCount function which has access to the 'log' function and 'count' variable via the closure:

The first example is a zoomed out view of the whole:

![Screenshot from 2021-02-11 11-22-44](https://user-images.githubusercontent.com/73107656/107630590-a15d4480-6c5b-11eb-8269-6c65b7c00160.png)

Then I break the pattern down to detail each key part:

![Screenshot from 2021-02-11 11-24-51](https://user-images.githubusercontent.com/73107656/107630673-c5b92100-6c5b-11eb-9876-809706d0ec8b.png)
------------------------------------------------------------------

### Module Pattern
**To be re-written**
Firstly we will look at the traditional pattern, breaking the pattern down into its nuts and bolts and then we will move on to model the ES6 native module structure.

The module pattern takes the namespace pattern to the next level.  With all the advantages of the namespace pattern the module pattern allows code to be organised, built up and broken down into interchangable blocks.  This makes it much easier to organise, maintain, reason about, test and also have multiple people working on the code base at the same time.

Below is an example of the key parts to the module pattern structure and below that I break it down to detail each part with a fine tooth comb.  We leave the traditional pattern at that point and switch over to focus on the ES6 model.

![Screenshot from 2021-02-10 06-45-38](https://user-images.githubusercontent.com/73107656/107475306-cd999800-6b6b-11eb-8384-6b1ce767a18e.png)


![Screenshot from 2021-02-10 06-46-25](https://user-images.githubusercontent.com/73107656/107475337-d9855a00-6b6b-11eb-9aac-db9aee2e5c62.png)


Now lets say for example that COUNTER is one of only two or three global variables in the project and the app is some kind of counter tool.  There may be multiple modules within the same namespace each containing different blocks of functionality for the app.  For example, each module has its own file and the below files contain modules all within the same namespace:

* counter1.js 
* counter2.JS
* counter3.js

All the above files have modules that are assigned to the same variable 'COUNT'.  This works as the way the pattern is structured means that as each file is loaded the object 'COUNT' is passed in, added to and then re-assigned to a new variable with the same name.  Here is the specific parts of the pattern that allow this to happen:

![Screenshot from 2021-02-10 07-10-24](https://user-images.githubusercontent.com/73107656/107477137-23237400-6b6f-11eb-8594-845d85d15d8b.png)


![Screenshot from 2021-02-10 07-10-38](https://user-images.githubusercontent.com/73107656/107477157-2c144580-6b6f-11eb-8d7b-6a9d5a88a837.png)


1. The first file is loaded, a new global variable is declared and asssigned the return value of the IIFE.

2. The IIFE is invoked sees that COUNTER is not defined so passes the empty object.

3. The public data is attached to the object and returned as the value of COUNT.

4. The following pages are loaded each time passing the previous COUNT object in, adding to it and then re-assigning it with the same variable name.

Once all files are loaded, the object 'COUNT' includes all the public properties from all files and in its closure all private data. 

Lets now see how the ES6 nativce module pattern is structured and complete the model by linking modules through import and export patterns. 





