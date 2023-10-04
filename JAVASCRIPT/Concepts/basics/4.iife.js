// IIFE (Immediately Invoked Function Expression)

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// They don't pollute the global object, and they are a simple way to isolate variables declarations.

var name = 'Simran';
function changeName(){
    name = 'praveen kumar'
}
changeName();
console.log(name); // praveen kumar

// function expression

var changeName1 = function(){
    name = 'naveen kumar'
}();
console.log(name) // naveen kumar

// IIFE functions 

var username='Venkatesh';
var a = (function(username){
  username = 'Chinni';
  return username;
})(username);
console.log(a);
console.log(username);

var name = 'Venkatesh';
var Bank = (function(name){
  name='Venkatesh';
  function getName(){
    return name;
  }
  function setName(newName){
    name = newName;
  }

  return {
    setName,getName
  }
})(name);
console.log(Bank);
console.log(Bank.getName());
Bank.setName('Chinni');
console.log(Bank.getName());
console.log(name);


var a = 30;
(function(){
    var a = 40;
    console.log(`iife value is ${a}`);
})()
console.log(`global value is ${a}`);

// Advantages of IIFE:

// Do not create unnecessary global variables and functions
// Functions and variables defined in IIFE do not conflict with other functions & variables even if they have same name.
// Organize JavaScript code.
// Make JavaScript code maintainable.

// why IIFE
// Reason:1 Does not pollute the global object namespace // Avoid Polluting the Global Object Namespace  

// global
const x = 'whatever';
const helloWorld = () => "Hello World";

// isolate declarations within the function
(() => {
    const x = 'iife whatever';
    const helloWorld = () => 'Hello iife';
    console.log(x);
    console.log(helloWorld());
})()
console.log(x);
console.log(helloWorld());

// Reason:2 Private Variables & Methods with Closures

const increment = (() => {
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log(`I have ${num} credit(s).`)
    return () => {counter++; credits(counter); console.dir(credits)}
    // return function(){
    //     counter ++;
    //     credits(counter);
    // }
})()

increment();
increment();
// credits(4) // Uncaught ReferenceError: credits is not defined

// Reason:3 The module Pattern

const Score = (() => {
    let count = 0;
    return {
        current: () => {return count},
        increment: () => {count ++},
        reset: () => {count = 0}
    }
})() // 0

Score.increment();
console.log(Score.current()); //1
Score.increment();
console.log(Score.current()); //2
Score.increment();
console.log(Score.current()); //3
Score.reset();
console.log(Score.current()); //0

// The Revealing Pattern is a variation of the module pattern

const Game = (() => {
    let count = 0;
    const current = () => {return `Game score is ${count}`};
    const increment = () => {count ++};
    const reset = () => {count = 0}

    return {
        current : current,
        increment: increment,
        reset: reset
    }
})(); 
Game.increment();
console.log(Game.current());
Game.reset();
console.log(Game.current());

// Injecting a namespace object

((namespace) => {
    namespace.count = 0;
    namespace.current = function(){return `App count is ${this.count}`}
    namespace.increment = function(){return this.count++};
    namespace.reset = function(){return this.count = 0}
})(window.App = window.App || {}) // 0

App.increment();
console.log(App.current()) // App count is 1
App.reset();
console.log(App.current()) // App count is 0



