# JavaScript OOP Reference Guide

### A resource for junior devs in their transition to mid level
#### My study covers both the traditional syntax and the newer ES6 patterns. This is a working document being crafted as I develop deeper levels of practical understanding.  Click the links below to go straight to the section of interest.  

#### ToC:
[Constructors & Factory Functions](###Constructors-&-Factory-Functions)<br>
[Prototype Inheritance](###Prototype-Inheritance)<br>
[Classes](###Classes)<br>
[The prototype chain](###The-prototype-chain)<br>
[Mixins](###Mixins)<br>
[Closures](###Classes)<br>
[IIFE - Immediately Invoked Function Expression](###IIFE---Immediately-Invoked-Function-Expression)<br>
[Namespace Pattern](###Namespace-Pattern) <br>
[ES6 native module pattern](###ES6-native-module-pattern)

----------------------------------------------------------------------

### Constructors & Factory Functions

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

------------------------------------------------------------

### Prototype Inheritance

Lets say there is a more general constructor called Vehicle and we have created a new constructor for a type of vehicle called Motorbike and we want Motorbike to inherit Vehicles prototypes. Here is the pattern:

```
Motorbike.prototype = Object.create(Vehicle.prototype);
Motorbike.prototype.constructor = Motorbike;

```
Now Motorbike has inherited both the prototype properties of Vehicle and also the default Object.  It can also assign it's own prototype properties.

------------------------------------------------------------

### Classes

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

----------------------------------------------------------------------------------------------------------

### The prototype chain
I think here a picture says a thousands words so here is an image from the console displaying the prototype chain for our example sportsCoupe:

![Screenshot from 2021-02-16 09-37-46](https://user-images.githubusercontent.com/73107656/108045019-e0640f00-703a-11eb-98c5-7ca902df0a68.png)

Here we can see that sportsCoupe has access to the **salePrice** method which is a prototype of the Car class, digging a level deeper we can see that sportsCoupe also has access to the prototype methods on the Vehicle class **forwards** and **stop**.  Digging deeper down again the global Object prototypes are also accessible to sportsCoupe as they are to all objects. This is an example of the prototype chain.

--------------------------------------------------------------------------------------------------

### Mixins

When reusable functions are not inherited from a class they can be saved and used from mixins.
Mixins are a way to store a function constructor where the function definition will be reused across objects of different types/classes.  For example both cars and trains move but these two types of objects will not share the same prototypes...however they could both share the behaviour of move functions.  In this circumstance a mixin is created which can then add the function to which ever object is passed into the mixin as an argument:

![Screenshot from 2021-02-16 14-11-13](https://user-images.githubusercontent.com/73107656/108074236-e240c900-7060-11eb-9a7a-bfa69a055fec.png)

-------------------------------------------------------------------------------------------

### Closures
-------------------------------------------------------------------

### IIFE - Immediately Invoked Function Expression

Below is an example of an IIFE in the form of an anonymous function.  The parentheses at the end of the code calls the function immediately.  Notice that there is an extra set of parentheses wrapping the declaration.  This is because when annonymous, the word function cannot be the first characters in the statement.  The second bracket can either be placed just before or after the parentheses that invoke the function:  

![Screenshot from 2021-02-09 13-48-17](https://user-images.githubusercontent.com/73107656/107372808-b9a75500-6add-11eb-8cfa-23daf33632b9.png)

------------------------------------------------------------------

### Namespace Pattern 

#### This sections covers one of many variations of the traditional module pattern.  We now have the modern ES6 native modules but before we get to them I wanted to cover the namespace pattern as it includes so many powerful moving parts into a beautiful construction.  

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

### ES6 native module pattern

JavaScript modules despite still evolving have become far more sophisticated and modular since ES6.  By simply adding the type **module** to a JavaScript file withing the script tag the whole file becomes automatically private as if one big closure has taken place.  To make specific functions and data available within the app to be shared between files/modules they are first explicitly exported and then imported. There are a variety of ways this can be structured, we will look at two:

`<script type="module" src="main.js"></script>`

Inline

```
// export from somefile.js
export const myFunc = function (){};

// import to main.js
import {myFunc} from './modules/somefile.js';

```

Grouped (kind of looks like destructuring)

```
export { func1, func2, func3 };

import { func1, func2, func3 } from './modules/somefile.js';

```

Default export:

```
export default myFunc;

```

Creating a module object so a files exports are properties of the object.  In this case the only global variable will be the object name.  This harks back to the traditional module namespace management and builds on it brilliantly.  Here is this pattern:

```
export { func1, func2, func3 };

import * as objectName from './modules/somefile.js';

```

In this situation the individual methods are accessed as normal:

```
objectName.func1();

```