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
7. **Module Pattern**

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

COUNTER can call the getCount function which has access to the 'log' function and 'count' variable via the closure:


![Screenshot from 2021-02-09 13-54-36](https://user-images.githubusercontent.com/73107656/107373405-67b2ff00-6ade-11eb-835e-8a1974f2658c.png)


### Module Pattern

The module pattern takes the namespace pattern to the next level.  With all the advantages of the namespace pattern the module pattern allows code to be organised, built up and broken down into interchangable blocks.  This makes it much easier to organise, maintain, reason about, test and also have multiple people working on the code base at the same time.

Below is an example of the key parts to the module pattern structure and below that I break it down to detail each part with a fine tooth comb.  After that I walk through how module files can be linked and utilised as one.

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
Next we will look at how each file is connected.

Every js file is linked within the HTML file and the order is critical.  Some files will include functions that are defined in other files so the order required is specific to each particular application.

We now have multiple files of modules and all the files are linked to the main js file, however each individual module still cannot access other files functions.
Linking functions between files, so each file has access to functions they are utilising.  This is something that for efficiency should be planned for in the design phase and added as each file is being built out. Now we have got our heads around the previous aspects of modules its now time add this extra level of complexity back in and present the pattern structure to do this.





