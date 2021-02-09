# JavaScript OOP Reference Guide

### A resource for junior devs in their transition to mid level
#### My study covers both the traditional syntax and the newer ES6 patterns. This is working document being crafted as I develop deeper levels of practical understanding.  Click the links below to go straight to the section of interest.  

#### ToC:
1. **Constructor Functions**
2. **The prototype chain**
3. **Prototype Inheritance**
4. **Mixins**
5. **Closures**
6. **IIFE - Immediately Invoked Function Expression**
7. **Namespace Pattern**
7. **Modules**

----------------------------------------------------------------------

### Constructor Functions
**Traditional Syntax**

Constructors are used to create new instances of an object/function. They do not return a value, instead when they are called they attach their function definition (the object and its key value pairs including methods) to the new variable name, creating a new object. The function can be called anytime to create a new instance of the object. 
One powerful characteristic of creating functions via a constructor is that the 'new' function inherits object characteristics that allow the keyword 'this' to be scoped to the function as an object, rather than 'this' meaning the global Object as is the case with a normal function definition or expression.  

**Code snippet example to be added here**

Constructors can be designed to take parameters which allow property values to be dynamic.  In this case any new object values are not set until the constructor function is called with the specific arguments for the new object:

**Code snippet example to be added here**


### The prototype chain


### Prototype Inheritance


### Mixins


### Closures


### IIFE - Immediately Invoked Function Expression

Below is an example of an IIFE in the form of an anonymous function.  The parentheses at the end of the code calls the function immediately.  Notice that there is an extra set of parentheses wrapping the declaration.  This is because when annonymous, the word function cannot be the first characters in the statement.  The second bracket can either be placed just before or after the parentheses that invoke the function:  

![Screenshot from 2021-02-09 13-48-17](https://user-images.githubusercontent.com/73107656/107372808-b9a75500-6add-11eb-8cfa-23daf33632b9.png)


**Code snippet example to be added here**

### Namespace Pattern

The below example shows how to structure and create a namespace object using an IIFE in a way that takes advantage of closure while also specifying specific public variables and methods.

First a global object is initialised using the capital letter convention.  This is the key to access any public variables or methods later on.
Next define the IIFE giving it a parameter input.  The argument for this will be the global object.
Then define all private variables and methods and then the public variables and methods.  Notice how the public method is prefixed with the 'namespace' parameter, this is how the method will be accessible later.
At the end input the namespace object as an argument.
When the page loads, the function is invoked, the closure takes place and the public method is bound to the global object.

COUNT can call the getCount function which has access to the 'log' function and 'count' variable via the closure:


![Screenshot from 2021-02-09 13-54-36](https://user-images.githubusercontent.com/73107656/107373405-67b2ff00-6ade-11eb-835e-8a1974f2658c.png)


### Modules


