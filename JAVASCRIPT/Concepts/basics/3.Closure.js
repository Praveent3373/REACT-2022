// Closures

// A closure is a feature in JavaScript where an inner function has
// access to the outer function’s variables and parameters — a scope chain.
// the inner function remembers the environment in which it was created.

// The closure has three scope chains:
// It has access to its own scope — variables defined between its curly brackets.
// It has access to the outer function’s variables
// It has access to the global variables

// Scope
// This set of identifiers that each environment has access to is called “scope.”
// We can nest scopes into a hierarchical chain of environments known as the “scope chain”.

// Global Execution Context
var x = 10;
function foo(){
    // Execution Context(foo)
    var y = 20; // free variable
    function bar(){
    // Execution Context(bar)
    var z = 15; // free variable
    var output = x + y + z;
    return output;
    }
    return bar;
}

let output = foo();
console.log(output); // returns bar function defination
console.log(output()) // returns bar function output


// Few questions before starting

function example1(){
    var a=10;
  }
  console.log(a); // what is the output?
//   // Is it 10? a is not defined
  

  function example2(){
    var b=20;
    function innerFunction(){
      return b;
    }
    return innerFunction;
  }
  let output = example2();
  console.log(output); //what is the output?
//   // Is it 20? // its defination
  
  
  // Function Expressions?
  let one = function(){
    return 1;
  }
// What is function definition?
  console.log(one);
  // What is function invoking
  console.log(one());
  // What will be the output, if we don't return anything from a function?
  console.log(one()); // undefined
  
// Nested Functions?
  function outer(){
    console.log('Outer');
    function inner(){
      console.log('Inner');
      return 1;
    }
    return inner;
  }
  // console.log(outer);
  let inner = outer();
  console.log(inner());

// Closures
var x=100;
function outer(){
  var y=50;   // stored in closure
  var n=100; // not stored in closure because not used in inner functions.
  function inner(){
    var z=10;
    console.log(y+z+x);
    y++;
    z++;
  }
  return inner;
}
let inner = outer();
console.log(inner());
console.log(inner());
console.log(inner());

// all the variables and innerfunctions will be stored in Local Scope
// once we excute the function all innerfunctions and variables will be destroyed.
// after code is excuted local scope will be removed from the call stack.
// then how outerfunction's variables avaiable to access ?
// console.dir(inner);
// if we check scopes we can see available variables
// [[Scopes]]: Scopes[3]
// 0: Closure (outer) {y: 53}
// 1: Script {inner: ƒ}
// 2: Global {window: Window, self: Window, document: document, name: '', location: Location, …}

// the outer function's variables are stored in closure that is the reason we are able to access them.
// if the outer function's variable not utilized in inner functions that cannot be stored in closure. 
// that is the advantage of the closure.
// the global variable available for all.

// real time example.
function Bank(){
    var name ='Praveen';
    function getName(){
      return name;
    }
    function setName(newName){
      name = newName;
    }
    return {getName,setName}
  }
  let bank = Bank();
  console.log(bank);
  console.log(bank.getName());
  bank.setName('Vinod');
  console.log(bank.getName());
  bank.setName('Simran');
  console.log(bank.getName());

// we cannot access  outerfunction's variabls and functions outsite directly they will be available only within the function.
// this encapsulation nothing but privacy for the data
console.log(name); // no access
console.log(getName()) // no access
//so we can make data secure and privacy using closures.

// closure allows you to associate the lexical environment with a function that operates on the data. this has obvious paralles to object oriented
// programming, where objects allow us to associate the object's properties with one or more methods.

// practical closures

function makeSizer(size){
    return function(){
        document.body.style.fontSize = size + 'px';
    }
}
var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

// document.getElementById('size-12').onclick = size12;
// document.getElementById('size-14').onclick = size14;
// document.getElementById('size-16').onclick = size16;

var x1 = 10;
function sum(a){
    return function(b){
        return function(c){
            // outer functions scope
            return function(d){
                // local scope
                return a + b + c + d + x1;
            }
        }
    }
}

// console.log(sum(1)(2)(3)(4));

// a function has access to the variable environment of the execution context in which it was created.
// Closure: VE attached to the function, exactly as it was at the time and place the function was created.

const secureBooking = function(){
      let passengersCount = 0;
      function updatePassengers(){
        passengersCount ++;
          console.log(`${passengersCount} passengers`)
      }
      return updatePassengers;
}
let passengers = secureBooking();
passengers();
passengers();
passengers();


let a;
const b = function(){
    const x = 20;
    a = function(){
        console.log(x * 2)
    }
}
b();
a(); // 40
// console.dir(a)
// 0: Closure (b) {x: 20}
// 1: Script {bank: {…}, secureBooking: ƒ, passengers: ƒ, a: ƒ, b: ƒ}
// 2: Global {window: Window, self: Window, document: document, name: '', location: Location, …}

const c = function(){
    const y = 100;
    a = function(){
        console.log(y * 2)
    }
}

// re-assigning 'a' function
c();
a(); // 200
// console.dir(a)
// 0: Closure (c) {y: 100}
// 1: Script {bank: {…}, secureBooking: ƒ, passengers: ƒ, a: ƒ, b: ƒ, …}
// 2: Global {window: Window, self: Window, document: document, name: '', location: Location, …}


// closer with an IIFE and a parameter

const credits = ((num) => {
  let credits = num;
  console.log(`initial credit calue: ${credits}`);
  return () => {
    credits -=1;
    if(credits > 0) console.log(`playing game, ${credits} credit(s) remaining`);
    if(credits <= 0) console.log(`not enough credits`);
  }
})(3); // initial credit calue: 3
credits(); // playing game, 2 credit(s) remaining
credits(); // playing game, 1 credit(s) remaining
credits(); // not enough credits