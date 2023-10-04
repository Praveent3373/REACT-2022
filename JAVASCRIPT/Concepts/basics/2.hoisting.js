// Hoisting

// Declaration (Hoisted)
var a;
function a(){};

// Assigning;
// Assigning means simply storing the value in a variable;
// a=5;

// Initialization (Not Hoisted)
// It means both declaring and assigning a initial value.
// var a=5;

// Javscript Engine has 2 phases while running the code
// Memory allocation and Execution using CallStack

// debugger;
console.log(a, e); // undefined
// console.log(b); // Uncaught ReferenceError: Cannot access 'b' before initialization
// console.log(c); //Uncaught ReferenceError: Cannot access 'c' before initialization
d(); // D
// e(); // Uncaught TypeError: e is not a function
f();
// js engine excutes code line by line

// var a is global variable its set as undeined in global scope
// sources tab in inspect tool

// var a
// Scope > Global a:undefined;

// var b and c local they stored in Script
// Scope > Script a:undefined, b:undefined

// function d() 
// Scope > Global d: f d();

// var e = function()
// Scope > Global e:undefined (stored in variable so its set as undefined)

// undefined is default value for the var keyword;
var a = 'A';
let b = 'B';
const c = 'C';

function d(){
    console.log('D')
}
var e = function(){
    console.log('E');
}

var f = () =>{
    console.log('F');
}

// console.log(a, b, c);
// d();
// e();

// Summery

// Hoisting is Js default behavior of moving declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
// Js Declartions are Hoisted
// Variables declared with var will be stored in Global window as undfeined in memory allowcation phase.
// Variables declared with let and const will be stored in Scrips as undefined in memory allocation phase.

// Hoisting allows functions to be safely used in code before they are declared.
// Variable and class declarations are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected
//  errors, and is not generally recommended.

// Function hoisting
// One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Tiger"
*/


// Variable hoisting
// Note: Conceptually variable hoisting is often presented as the interpreter "splitting variable declaration and initialization, and moving (just)
// the declarations to the top of the code".

// var hoisting
// Here we declare then initialize the value of a var after using it. The default initialization of the var is undefined.
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.
// ===
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num = 6; // Initialization and declaration.
console.log(num); // Returns 6 after the line with initialization is executed.
// ===
console.log(num); // Throws ReferenceError exception - the interpreter doesn't know about `num`.
num = 6; // Initialization

// let and const hoisting
// Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. An exception will be thrown if a
//  variable declared with let or const is read before it is initialized.
// Variables declared with let and const are hoisted but not initialized with a default value. Accessing a let or const variable before it's declared
//  will result in a ReferenceError:
console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Initialization


// hoisting visualization

// creation phase       //execution phase
var age = 23;
age: undefined;         age: 23

sayHello();
function sayHello(){
    console.log('hello')
}

sayHello: fn();


// 1.
console.log(age);
var age = 23;

// js engine checks the entire file in the creation phase, takes the all the variables which are there globally and assigns space for them.
// in the create phase variables got some space in memory and then the js engine simply put undefined there.
// in the creation phase only memory was allocated and in the execution phase the value also put in the memory that the value that the age holds is actullay 23.
// now this mechanism of giving memory to variables in the creation phase is nothing but hoisting.
// since the value is not given in the creation phase this is known as partially hoisted.
// variables are partially hoisted because they are given memory but they are not assigned any value. 

// 2. var age = 23; var age = 23; will it hoisted once or twice
// it does not care about value in the creation space ; it is hoisted only once if the variable names are same 

// 3. function hoisting
sayHello();
function sayHello(){
    console.log("Hello")
}
// sayHello value is not undefined but it is function itself.
// this means functions are also hoisted they are also assigned memory but the value of it is not undefined it is the function itself that means functions
//  are completly hoisted.
// variables are partially hoisted because memory is assinged for variables but value is not given in functions they are assinged memory and value is also
//  given that means actual function exists in the memory and not undefined even before executing the code.
// in the creation phase itself sayHello hold the value of the actual function that's why if you call the function before declaring it or before defining
//  it gives the right output. 

// 4. will it hoisted once or twice

sayHello();
function sayHello(){
    console.log("Hello")
}

function sayHello(){
    console.log("Hi")
}

// its being hoisted once only. js engine sees file from top to bottom it will firstly sayHello and it will allocate memory along with perticular value
//  then it will see sayHello again and it will say it is already there in the memory but since it cares about the value also when it comes to function
//  it will replace console.log('Hello') with console.log('hi')  

// 5. function expressions

sayHello() // sayHello is not a function
var sayHello = function(){
    console.log("Hello")
}

// assigning a function to a variable is called function expression.
// when js engine parsing your file when it sees this whre sayHello it will think that it is a variable as soon as it this var keyword and sayHello it
//  will think that ok i dont need to see the value because variables are partially hoisted that means sayHello is given memory it is there in the memory
//  and value will be undefined . js engine does not know later it is actually a function because it didn't even see the value when it saw that it is a
//  variable. we are calling sayHello with parenthesis but according to js engine as of now sayHello is not a function it is a variable that's why it is
//  giving us an error that sayHello is not a funciton.
// in the cration phase it was given memory and then undefined was given to it.
// in the execution space when it saw sayHello() it will think why are we adding parentheses to variable that's why it is giving us an error.

// 6. what will be the output

var name = 'Praveen';

function changeName(){
    console.log('name', name);
    var name = 'Simran';
    console.log('Changed name', name);
}
changeName();

// name undefined : considering own scope;
// Changed name Simran

// 7. let and const keyword

console.log(name); // cannot access 'name' before initiallization.
let name = "Praveen";

// when we declare variables with var, let, const it is definatly going to get hoisted but in case of let and const it is not going to get initiallized
//  any value untill it comes to the second line
// in the creation phase we do not see this name keyword at all. because it was not even initiallized in any value this is also called temporal dead zone
// TDZ is timespan in which your variable is actually created but it is not initalized any value and therefore untill it is initialized any value you
// canot access. that's why if we console.log(name) we will not be able to access it because of temporal dead zone or because it is hoisted but it is not
// initialized anything untill and unless a variable initiallized something it cannot be accessed this can be same with const keyword.    